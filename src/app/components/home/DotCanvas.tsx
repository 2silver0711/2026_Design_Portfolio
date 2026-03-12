import { useEffect, useRef } from "react";

interface DotData {
  baseX: number;
  baseY: number;
  curX: number;
  curY: number;
  baseRadius: number;
  phase: number;
}

interface DotCanvasProps {
  text: string;
  width: number;
  height: number;
  dotSpacing?: number;
  dotColor?: string;
  fontSize?: number;
  accentColor?: string;
}

export function DotCanvas({
  text,
  width,
  height,
  dotSpacing = 14,
  dotColor = "#EDE8DF",
  fontSize = 280,
  accentColor = "#FF4800",
}: DotCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DotData[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false });
  const rippleRef = useRef<{ x: number; y: number; startTime: number } | null>(null);
  const scanRef = useRef<{ startTime: number; active: boolean }>({ startTime: 0, active: false });
  const animRef = useRef<number>(0);
  const tsRef = useRef(0);
  const lastTsRef = useRef(0);
  const nextScanRef = useRef(3500);

  // Parse colors once
  const baseRGB = useRef({ r: 237, g: 232, b: 223 });
  const accentRGB = useRef({ r: 255, g: 72, b: 0 });

  useEffect(() => {
    const hex = (h: string) => {
      const c = h.replace("#", "");
      return { r: parseInt(c.slice(0, 2), 16), g: parseInt(c.slice(2, 4), 16), b: parseInt(c.slice(4, 6), 16) };
    };
    baseRGB.current = hex(dotColor);
    accentRGB.current = hex(accentColor);
  }, [dotColor, accentColor]);

  // Build dot map from text
  useEffect(() => {
    const build = () => {
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const ctx = off.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${fontSize}px 'Space Mono', monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2, height / 2);

      const img = ctx.getImageData(0, 0, width, height);
      const dots: DotData[] = [];
      for (let x = 0; x < width; x += dotSpacing) {
        for (let y = 0; y < height; y += dotSpacing) {
          const a = img.data[(y * width + x) * 4 + 3];
          if (a > 20) {
            const r = Math.max(1, ((dotSpacing / 2) * 0.85) * (a / 255));
            dots.push({ baseX: x, baseY: y, curX: x, curY: y, baseRadius: r, phase: Math.random() * Math.PI * 2 });
          }
        }
      }
      dotsRef.current = dots;
    };

    if (document.fonts) {
      document.fonts.ready.then(() => setTimeout(build, 50));
    } else {
      setTimeout(build, 200);
    }
  }, [text, width, height, dotSpacing, fontSize]);

  // Resize canvas on dimension change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;
  }, [width, height]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const animate = (ts: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) { animRef.current = requestAnimationFrame(animate); return; }

      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;
      tsRef.current = ts;

      // Auto glitch scan trigger
      nextScanRef.current -= dt;
      if (nextScanRef.current <= 0 && !scanRef.current.active) {
        scanRef.current = { startTime: ts, active: true };
        nextScanRef.current = 5000 + Math.random() * 4000;
      }

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const ripple = rippleRef.current;
      const scan = scanRef.current;
      const { r: br, g: bg, b: bb } = baseRGB.current;
      const { r: ar, g: ag, b: ab } = accentRGB.current;

      // Scan sweep progress
      const SCAN_DURATION = 1300;
      const SCAN_BAND = 80;
      let scanY = -9999;
      if (scan.active) {
        const prog = (ts - scan.startTime) / SCAN_DURATION;
        if (prog >= 1) {
          scanRef.current = { startTime: 0, active: false };
        } else {
          // ease-in-out
          const eased = prog < 0.5 ? 2 * prog * prog : -1 + (4 - 2 * prog) * prog;
          scanY = eased * (height + SCAN_BAND) - SCAN_BAND / 2;
        }
      }

      // Two-pass rendering (no-glow first, glow second) for efficiency
      const dots = dotsRef.current;
      if (dots.length === 0) { animRef.current = requestAnimationFrame(animate); return; }

      // ── Pre-compute dot state ──────────────────────────────
      type DotState = {
        x: number; y: number; r: number; g: number; b: number;
        radius: number; glow: boolean; glowIntensity: number;
      };
      const states: DotState[] = new Array(dots.length);

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // 1. Mouse proximity
        const dx = dot.baseX - mouse.x;
        const dy = dot.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const GLOW_R = 100;
        const PUSH_R = 60;
        const proximity = mouse.inside && dist < GLOW_R ? 1 - dist / GLOW_R : 0;

        // Spring push
        let tx = dot.baseX;
        let ty = dot.baseY;
        if (mouse.inside && dist < PUSH_R && dist > 0.01) {
          const force = (1 - dist / PUSH_R) * 22;
          tx = dot.baseX + (dx / dist) * force;
          ty = dot.baseY + (dy / dist) * force;
        }
        const LERP = 0.11;
        dot.curX += (tx - dot.curX) * LERP;
        dot.curY += (ty - dot.curY) * LERP;

        // 2. Click ripple
        let rippleEffect = 0;
        if (ripple) {
          const rdx = dot.baseX - ripple.x;
          const rdy = dot.baseY - ripple.y;
          const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
          const age = (ts - ripple.startTime) / 1000;
          const waveFront = age * 800;
          const waveWidth = 90;
          rippleEffect = Math.max(0, 1 - Math.abs(rDist - waveFront) / waveWidth);
          if (age > 2.0) rippleRef.current = null;
        }

        // 3. Glitch scan
        let scanEffect = 0;
        let glitchX = 0;
        if (scan.active) {
          const distFromScan = Math.abs(dot.baseY - scanY);
          scanEffect = Math.max(0, 1 - distFromScan / SCAN_BAND);
          // Random x jitter during scan passage
          if (scanEffect > 0.35 && Math.random() < 0.12) {
            glitchX = (Math.random() - 0.5) * 10 * scanEffect;
          }
        }

        // 4. Ambient breath
        const ambient = Math.sin(ts * 0.00075 + dot.phase) * 0.07;

        // Combined
        const colorT = Math.min(1, proximity * 1.4 + rippleEffect * 1.1 + scanEffect * 0.95);
        const radiusMul = 1 + proximity * 1.8 + rippleEffect * 1.0 + scanEffect * 0.55 + ambient;
        const radius = Math.max(0.5, dot.baseRadius * radiusMul);

        const r = Math.round(br + (ar - br) * colorT);
        const g = Math.round(bg + (ag - bg) * colorT);
        const b = Math.round(bb + (ab - bb) * colorT);

        states[i] = {
          x: dot.curX + glitchX,
          y: dot.curY,
          r, g, b, radius,
          glow: colorT > 0.35,
          glowIntensity: colorT,
        };
      }

      // ── Pass 1: normal dots (no shadow) ───────────────────
      ctx.shadowBlur = 0;
      for (const s of states) {
        if (!s.glow) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
          ctx.fill();
        }
      }

      // ── Pass 2: glow dots (with shadow) ───────────────────
      ctx.shadowColor = accentColor;
      for (const s of states) {
        if (s.glow) {
          ctx.shadowBlur = 10 * s.glowIntensity;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [width, height, accentColor]);

  // ── Event handlers ─────────────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - rect.left) * (width / rect.width),
      y: (e.clientY - rect.top) * (height / rect.height),
      inside: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999, inside: false };
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    rippleRef.current = {
      x: (e.clientX - rect.left) * (width / rect.width),
      y: (e.clientY - rect.top) * (height / rect.height),
      startTime: tsRef.current,
    };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair" }}
    />
  );
}