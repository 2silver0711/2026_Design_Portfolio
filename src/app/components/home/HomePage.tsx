import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { DotCanvas } from "./DotCanvas";
import stoovImg from "figma:asset/84e5acbfb3082428b38af12df4acf81aa26edbd1.png";
import locallinkImg from "figma:asset/dba47492126fc7857c7b715b1d045fb7f4ad5658.png";
import budgetBuddyImg from "figma:asset/4df4910fe1cd07788d0fbd35024b6c718e762d7a.png";

const TICKER_ITEMS = [
  "UX/UI DESIGN",
  "__",
  "PRODUCT",
  "__",
  "SERVICE",
  "__",
  "WEB DESIGN",
  "__",
  "EXPLORE",
  "__",
  "INTERACT",
  "__",
  "MOBILE",
  "__",
  "DIGITAL",
  "__",
  "PROCESS",
  "__",
  "DESIGN SYSTEM",
  "__",
  "ITERATE",
  "__",
  "SERVICE",
  "__",
  "UX/UI DESIGN",
  "__",
];

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1960);
  useEffect(() => {
    const handle = () => setW(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return w;
}

function CornerBracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const isTop = pos.startsWith("t");
  const isLeft = pos.endsWith("l");
  return (
    <div
      style={{
        position: "absolute",
        ...(isTop ? { top: 0 } : { bottom: 0 }),
        ...(isLeft ? { left: 0 } : { right: 0 }),
        width: 40,
        height: 40,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        {isTop && isLeft && (
          <>
            <line x1="0" y1="0" x2="20" y2="0" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="20" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {isTop && !isLeft && (
          <>
            <line x1="40" y1="0" x2="20" y2="0" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="40" y1="0" x2="40" y2="20" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {!isTop && isLeft && (
          <>
            <line x1="0" y1="40" x2="20" y2="40" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="0" y1="40" x2="0" y2="20" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {!isTop && !isLeft && (
          <>
            <line x1="40" y1="40" x2="20" y2="40" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="40" y1="40" x2="40" y2="20" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </div>
  );
}

export function HomePage() {
  const [typed, setTyped] = useState("");
  const fullText = "> INITIALIZING_PORTFOLIO... SYSTEM_READY";
  const [showCursor, setShowCursor] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ w: 1200, h: 380 });
  const heroRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setCanvasSize({ w: Math.floor(rect.width), h: 400 });
    }
  }, [windowWidth]);

  const canvasFontSize = Math.min(Math.floor(canvasSize.w / 11), 160);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0906",
        position: "relative",
        overflowX: "hidden",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "radial-gradient(circle, #1E1C18 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1960px", margin: "0 auto" }}>
        {/* Hero section */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Sub-header bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 48px",
              borderBottom: "1px solid #1E1C18",
              position: "relative",
            }}
          >
            <span style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.2em" }}>
              UI/UX, WEB DESIGNER
            </span>
            <span
              style={{
                fontSize: "10px",
                color: "#4A4535",
                letterSpacing: "0.2em",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              DESIGN PROCESS
            </span>
            <span style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.2em" }}>
              2024_2026
            </span>
          </div>

          {/* Hero center */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "40px 48px",
              position: "relative",
            }}
          >
            {/* Terminal typing */}
            <div style={{ marginBottom: "32px" }}>
              <span style={{ fontSize: "11px", color: "#FF4800", letterSpacing: "0.15em" }}>
                {typed}
                {showCursor && (
                  <span
                    style={{
                      borderRight: "2px solid #FF4800",
                      marginLeft: "2px",
                      display: "inline-block",
                      height: "12px",
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </span>
            </div>

            {/* Dot Canvas Hero Title */}
            <div
              ref={heroRef}
              style={{ width: "100%", height: "400px", position: "relative" }}
            >
              <CornerBracket pos="tl" />
              <CornerBracket pos="tr" />
              <CornerBracket pos="bl" />
              <CornerBracket pos="br" />

              {/* 좌표 라벨 — 캔버스 컨테이너 안 모서리에 고정 */}
              <span style={{ position: "absolute", top: "10px", left: "48px", fontSize: "9px", color: "#4A4535", letterSpacing: "0.15em", pointerEvents: "none" }}>
                X: 0000 / Y: 0540
              </span>
              <span style={{ position: "absolute", top: "10px", right: "48px", fontSize: "9px", color: "#4A4535", letterSpacing: "0.15em", pointerEvents: "none" }}>
                COORD_01
              </span>

              <div style={{ padding: "0 40px", height: "100%" }}>
                {canvasSize.w > 200 && (
                  <DotCanvas
                    text="My Design Journey"
                    width={canvasSize.w}
                    height={400}
                    dotSpacing={13}
                    dotColor="#EDE8DF"
                    fontSize={canvasFontSize}
                    accentColor="#FF4800"
                  />
                )}
              </div>
            </div>

            {/* Subtitle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
                marginTop: "16px",
              }}
            >
              <div style={{ width: "40px", height: "1px", backgroundColor: "#FF4800" }} />
              <span style={{ fontSize: "13px", color: "#EDE8DF", letterSpacing: "0.4em" }}>
                UI/UX DESIGNER — WEB DESIGNER — PRODUCT DESIGNER
              </span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#1E1C18" }} />
              {/* Interaction hint */}
              <span
                style={{
                  fontSize: "9px",
                  color: "#3A3830",
                  letterSpacing: "0.2em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#FF4800", opacity: 0.5 }}>◈</span>
                HOVER + CLICK TO INTERACT
              </span>
            </div>

            {/* CTA + Status */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: "48px",
              }}
            >
              <div style={{ display: "flex", gap: "16px" }}>
                <Link
                  to="/projects"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 28px",
                    border: "1px solid #EDE8DF",
                    fontSize: "11px",
                    color: "#EDE8DF",
                    textDecoration: "none",
                    letterSpacing: "0.25em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#FF4800";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF4800";
                    (e.currentTarget as HTMLElement).style.color = "#0A0906";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "#EDE8DF";
                    (e.currentTarget as HTMLElement).style.color = "#EDE8DF";
                  }}
                >
                  VIEW_WORK
                  <span style={{ fontSize: "14px" }}>→</span>
                </Link>
                <Link
                  to="/profile"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 28px",
                    border: "1px solid #2A2820",
                    fontSize: "11px",
                    color: "#6B6555",
                    textDecoration: "none",
                    letterSpacing: "0.25em",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#EDE8DF";
                    (e.currentTarget as HTMLElement).style.color = "#EDE8DF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#2A2820";
                    (e.currentTarget as HTMLElement).style.color = "#6B6555";
                  }}
                >
                  ABOUT_ME
                </Link>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#00FF88",
                      display: "inline-block",
                      boxShadow: "0 0 8px #00FF88",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#6B6555", letterSpacing: "0.15em" }}>
                    STATUS: AVAILABLE_FOR_WORK
                  </span>
                </div>
                <div style={{ marginTop: "8px", fontSize: "9px", color: "#4A4535", letterSpacing: "0.1em" }}>
                  BASED_IN SEOUL, KR
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div
            style={{
              borderTop: "1px solid #1E1C18",
              padding: "12px 0",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "32px",
                animation: "ticker 30s linear infinite",
                whiteSpace: "nowrap",
              }}
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "10px",
                    color: item === "__" ? "#1E1C18" : item.match(/^[01]+$/) ? "#FF4800" : "#4A4535",
                    letterSpacing: "0.3em",
                    flexShrink: 0,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Works Preview */}
        <section style={{ padding: "80px 48px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
            }}
          >
            <div>
              <div style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.3em", marginBottom: "12px" }}>
                [ SELECTED_WORKS ]
              </div>
              <h2 style={{ fontSize: "40px", color: "#EDE8DF", margin: 0, letterSpacing: "-0.02em" }}>
                RECENT_PROJECTS
              </h2>
            </div>
            <Link
              to="/projects"
              style={{
                fontSize: "11px",
                color: "#FF4800",
                textDecoration: "none",
                letterSpacing: "0.2em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              ALL_PROJECTS →
            </Link>
          </div>

          {/* Preview grid — STOOV big left + LocalLink & Budget Buddy stacked right */}
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2px" }}>
            <PreviewCard
              num="001"
              title="STOOV"
              sub="Service Design — Map Platform"
              period="2025.10 ~ 2026.01"
              imgUrl={stoovImg}
              tags={["SERVICE_DESIGN", "MAP_PLATFORM"]}
              accentColor="#FF4800"
              tall
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <PreviewCard
                num="002"
                title="LocalLink"
                sub="UX/UI Design — Community"
                period="2024.03 ~ 11"
                imgUrl={locallinkImg}
                tags={["TRAVEL", "LOCAL_TOURISM"]}
                accentColor="#00DC6E"
              />
              <PreviewCard
                num="003"
                title="Budget Buddy"
                sub="Product Design — e-Wallet"
                period="2025.05 ~ 06"
                imgUrl={budgetBuddyImg}
                tags={["PRODUCT_DESIGN", "SAMSUNG_PAY"]}
                accentColor="#00D4FF"
              />
            </div>
          </div>
        </section>

        {/* Bottom strip */}
        <div
          style={{
            borderTop: "1px solid #1E1C18",
            padding: "24px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            © 2026 PARK.LEEEUN — ALL_RIGHTS_RESERVED
          </span>
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            BUILT_WITH: REACT + TYPESCRIPT
          </span>
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            v2.0.26_STABLE
          </span>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

function PreviewCard({
  num,
  title,
  sub,
  period,
  imgUrl,
  tags,
  accentColor = "#FF4800",
  tall = false,
}: {
  num: string;
  title: string;
  sub: string;
  period: string;
  imgUrl: string;
  tags: string[];
  accentColor?: string;
  tall?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/projects"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "block",
        cursor: "pointer",
        backgroundColor: "#111009",
        textDecoration: "none",
        ...(tall ? { minHeight: "480px" } : { aspectRatio: "16/9" }),
        flex: tall ? "unset" : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={imgUrl}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          transition: "transform 0.5s ease, filter 0.5s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          filter: hovered
            ? "grayscale(0%) brightness(0.4)"
            : "grayscale(60%) brightness(0.25)",
        }}
      />

      {/* Halftone dot overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          mixBlendMode: "overlay",
          transition: "opacity 0.3s",
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Accent border left */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "3px",
          backgroundColor: hovered ? accentColor : "transparent",
          transition: "background-color 0.3s",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            style={{
              fontSize: "10px",
              color: hovered ? accentColor : "#4A4535",
              letterSpacing: "0.2em",
              transition: "color 0.2s",
            }}
          >
            {num}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "9px",
                  color: hovered ? accentColor + "bb" : "#4A4535",
                  border: `1px solid ${hovered ? accentColor + "44" : "#2A2820"}`,
                  padding: "2px 8px",
                  letterSpacing: "0.1em",
                  backgroundColor: "rgba(10,9,6,0.7)",
                  transition: "all 0.2s",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div>
          <div
            style={{
              fontSize: "9px",
              color: "#4A4535",
              letterSpacing: "0.15em",
              marginBottom: "4px",
            }}
          >
            {period}
          </div>
          <div
            style={{
              fontSize: "9px",
              color: "#6B6555",
              letterSpacing: "0.2em",
              marginBottom: "8px",
            }}
          >
            {sub}
          </div>
          <div
            style={{
              fontSize: tall ? "clamp(28px, 3vw, 44px)" : "clamp(22px, 2vw, 32px)",
              color: hovered ? accentColor : "#EDE8DF",
              letterSpacing: "-0.02em",
              transition: "color 0.3s",
            }}
          >
            {title}
          </div>
        </div>
      </div>

      {/* Bottom accent bar + label on hover */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "2px",
          backgroundColor: accentColor,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.35s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "28px",
          fontSize: "10px",
          color: accentColor,
          letterSpacing: "0.2em",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        VIEW_PROJECT →
      </div>
    </Link>
  );
}