import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import imgProfile from "figma:asset/bc042af91aad7d70dca49f0e41893c364785a12f.png";

const TOOLS_DESIGN = [
  "FIGMA", "MAKE", "SLIDES",
  "PHOTOSHOP", "ILLUSTRATOR", "MAZE",
];
const TOOLS_DEV = [
  "KESHOT", "FUSION",
  "VS_CODE", "GITHUB",
];

const EDUCATION = [
  {
    year: "2025",
    title: "서울여자대학교",
    detail: "산업디자인학과 학사 졸업",
    tag: "DEGREE",
  },
  {
    year: "2025",
    title: "주)구름 goorm",
    detail: "프로덕트 디자이너 4회차 부트캠프 수료",
    tag: "BOOTCAMP",
  },
  {
    year: "2021",
    title: "조선대학교",
    detail: "디자인공학과 수료",
    tag: "DEGREE",
  },
];

const AWARDS = [
  {
    year: "2025",
    title: "kakao goorm DEEPDIVE 4회차",
    detail: "팀 최우수상",
    tag: "AWARD",
  },
  {
    year: "2024",
    title: "LocalLink 프로젝트",
    detail: "노트폴리오 PICK 선정",
    tag: "PICK",
  },
];

const ACTIVITIES = [
  {
    year: "2024",
    title: "산업디자인학과 졸준위",
    detail: "포스터 팀장",
    tag: "LEADER",
  },
  {
    year: "2024",
    title: "SKT 에이닷 얼리어닷터 2기",
    detail: "참여",
    tag: "ACTIVITY",
  },
];

const PROJECTS_BRIEF = [
  {
    type: "Service Project",
    name: "STOOV",
    period: "2025.10 ~ 2026.01",
    desc: "버스킹 공연 장소를 탐색하고, 예약 사이트로 바로 이동이 가능한 지도형 플랫폼",
  },
  {
    type: "UX/UI Project",
    name: "LocalLink",
    period: "2024.03 ~ 11",
    desc: "소외 지역 활성화를 위한 현지인의 여행 코스 제공과 게스트의 코스 소비 서비스",
  },
  {
    type: "Product/UI Design",
    name: "Budget Buddy",
    period: "2025.05 ~ 06",
    desc: "새로운 가치를 제공하는 e-wallet",
  },
];

export function ProfilePage() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<"tools" | "edu" | "about">("edu");
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotCanvasLoaded = true;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Dot matrix "PROFILE" text
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = 800;
      canvas.height = 200;
      ctx.clearRect(0, 0, 800, 200);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 160px 'Space Mono', monospace";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText("PROFILE", 0, 100);

      const imgData = ctx.getImageData(0, 0, 800, 200);
      ctx.clearRect(0, 0, 800, 200);

      const spacing = 10;
      for (let x = 0; x < 800; x += spacing) {
        for (let y = 0; y < 200; y += spacing) {
          const idx = (y * 800 + x) * 4;
          const alpha = imgData.data[idx + 3];
          if (alpha > 20) {
            const r = (spacing / 2) * 0.75 * (alpha / 255);
            ctx.beginPath();
            ctx.arc(x, y, Math.max(0.8, r), 0, Math.PI * 2);
            ctx.fillStyle = "#EDE8DF";
            ctx.fill();
          }
        }
      }
    };

    if (document.fonts) {
      document.fonts.ready.then(() => setTimeout(render, 50));
    } else {
      setTimeout(render, 200);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0906",
        fontFamily: "'Space Mono', monospace",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Dot grid bg */}
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
        {/* Page header */}
        <div
          style={{
            padding: "16px 48px",
            borderBottom: "1px solid #1E1C18",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.3em" }}>
            [ 02_PROFILE ]
          </span>
          <span
            style={{
              fontSize: "9px",
              color: "#4A4535",
              letterSpacing: "0.2em",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            ABOUT — TOOLS — EDUCATION
          </span>
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            NODE: 024 / DESIGNER. PARK_LEE_EUN
          </span>
        </div>

        {/* Hero: "Designing Solutions for Real Users" */}
        <div
          style={{
            padding: "64px 48px 0",
            borderBottom: "1px solid #1E1C18",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "64px",
            alignItems: "start",
            paddingBottom: "56px",
          }}
        >
          {/* Left: hero headline + bio */}
          <div>
            <div style={{ marginBottom: "8px", fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em" }}>
              &gt; LOADING_PROFILE_DATA... SYSTEM_READY
            </div>

            {/* Dot canvas PROFILE */}
            <div
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "200px",
                opacity: dotCanvasLoaded ? 1 : 0,
                transition: "opacity 0.5s",
                marginBottom: "40px",
              }}
            >
              <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
            </div>

            {/* "Designing Solutions for Real Users" headline */}
            <div
              style={{
                marginBottom: "32px",
                borderLeft: "2px solid #FF4800",
                paddingLeft: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  color: "#6B6555",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "4px",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Designing Solutions
              </div>
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  color: "#6B6555",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                for Real Users
              </div>
            </div>

            {/* Bio */}
            <div
              style={{
                maxWidth: "680px",
                fontSize: "13px",
                color: "#6B6555",
                lineHeight: "2",
                letterSpacing: "0.05em",
              }}
            >
              타겟 사용자를 겨냥해{" "}
              <span style={{ color: "#EDE8DF" }}>문제를 해결하는</span>{" "}
              <span style={{ color: "#EDE8DF" }}>디자이너</span>입니다.
              <br />
              명확한 문제 정의와 그에 맞는 디자인을 통해 사용자 경험을 만들어갑니다.
            </div>

            {/* bottom divider */}
            <div
              style={{
                marginTop: "32px",
                borderTop: "1px solid #1E1C18",
                maxWidth: "680px",
              }}
            />
          </div>

          {/* Right: photo + info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {/* Profile Photo */}
            <div
              style={{
                position: "relative",
                marginBottom: "32px",
                overflow: "hidden",
              }}
            >
              {/* corner brackets */}
              {(["tl", "tr", "bl", "br"] as const).map((pos) => (
                <CornerBracket key={pos} pos={pos} />
              ))}
              <img
                src={imgProfile}
                alt="Park Lee Eun"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  display: "block",
                  filter: "grayscale(20%)",
                }}
              />
              {/* Halftone overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "6px 6px",
                  pointerEvents: "none",
                }}
              />
              {/* Name badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  backgroundColor: "rgba(10,9,6,0.85)",
                  border: "1px solid #2A2820",
                  padding: "8px 14px",
                }}
              >
                <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.2em", marginBottom: "2px" }}>
                  ID_VERIFIED
                </div>
                <div style={{ fontSize: "11px", color: "#EDE8DF", letterSpacing: "0.1em" }}>
                  PARK_LEE_EUN
                </div>
              </div>
            </div>

            {/* Info table */}
            <div style={{ borderLeft: "1px solid #1E1C18", paddingLeft: "32px" }}>
              {[
                { label: "NAME", value: "박이은 / Park Lee Eun" },
                { label: "ROLE", value: "UI/UX, WEB DESIGNER" },
                { label: "BASE", value: "SEOUL, KR" },
                { label: "ACTIVE", value: "2024 — NOW" },
                { label: "STATUS", value: "AVAILABLE ●" },
                { label: "CONTACT", value: "peu20816@gmail.com" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "11px 0",
                    borderBottom: "1px solid #1E1C18",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em", flexShrink: 0 }}>
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      color: item.label === "STATUS" ? "#00FF88" : "#EDE8DF",
                      letterSpacing: "0.08em",
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div
          style={{
            display: "flex",
            borderBottom: "1px solid #1E1C18",
            padding: "0 48px",
          }}
        >
          {([
            { key: "edu", label: "01_EDUCATION" },
            { key: "about", label: "02_PROJECTS" },
            { key: "tools", label: "03_TOOLS" },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeSection === tab.key ? "2px solid #FF4800" : "2px solid transparent",
                padding: "16px 24px",
                fontSize: "11px",
                color: activeSection === tab.key ? "#EDE8DF" : "#4A4535",
                letterSpacing: "0.2em",
                cursor: "pointer",
                transition: "color 0.2s",
                fontFamily: "'Space Mono', monospace",
                marginBottom: "-1px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={sectionRef} style={{ padding: "48px" }}>

          {/* TOOLS */}
          {activeSection === "tools" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }}>
                {/* Design Tools */}
                <div>
                  <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "28px" }}>
                    [DESIGN_TOOLS]
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {TOOLS_DESIGN.map((tool, i) => (
                      <ToolTag key={tool} label={tool} index={i} visible={visible} />
                    ))}
                  </div>
                </div>

                {/* Dev & Research Tools */}
                <div>
                  <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "28px" }}>
                    [DEV_&amp;_3D PRODUCT_TOOLS]
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {TOOLS_DEV.map((tool, i) => (
                      <ToolTag key={tool} label={tool} index={i} visible={visible} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Tool legend */}
              <div
                style={{
                  marginTop: "48px",
                  padding: "24px",
                  border: "1px solid #1E1C18",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "24px",
                }}
              >
                {[
                  { label: "DESIGN", tools: "Figma · Make · Slides · Photoshop · Illustrator · Maze" },
                  { label: "HARDWARE & 3D", tools: "Keshot · Fusion" },
                  { label: "DEVELOPMENT", tools: "VS Code · GitHub" },
                ].map((group) => (
                  <div key={group.label}>
                    <div style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em", marginBottom: "10px" }}>
                      // {group.label}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6B6555", lineHeight: "1.8", letterSpacing: "0.05em" }}>
                      {group.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeSection === "edu" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px" }}>
              {/* Education column */}
              <div>
                <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "32px" }}>
                  [EDUCATION_LOG]
                </div>
                {EDUCATION.map((edu, i) => (
                  <EduCard key={i} item={edu} index={i} visible={visible} />
                ))}
              </div>

              {/* Awards column */}
              <div>
                <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "32px" }}>
                  [AWARD_LOG]
                </div>
                {AWARDS.map((award, i) => (
                  <EduCard key={i} item={award} index={i} visible={visible} isAward />
                ))}

                {/* Stats */}
                <div
                  style={{
                    marginTop: "32px",
                    padding: "24px",
                    border: "1px solid #1E1C18",
                    backgroundColor: "#0D0C09",
                  }}
                >
                  <div style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em", marginBottom: "20px" }}>
                    [SYSTEM_INFO]
                  </div>
                  {[
                    { k: "DEGREE", v: "B.A. Industrial Design" },
                    { k: "BOOTCAMP", v: "Product Designer — goorm" },
                    { k: "PROJECTS", v: "3 Featured Works" },
                    { k: "AWARD", v: "최우수상 x1  PICK x1" },
                    { k: "ACTIVITY", v: "졸준위 · 얼리어닷터" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom: "1px solid #1A1814",
                      }}
                    >
                      <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>{row.k}</span>
                      <span style={{ fontSize: "11px", color: "#EDE8DF", letterSpacing: "0.08em" }}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities column */}
              <div>
                <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "32px" }}>
                  [ACTIVITY_LOG]
                </div>
                {ACTIVITIES.map((act, i) => (
                  <EduCard key={i} item={act} index={i} visible={visible} isActivity />
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS (About) */}
          {activeSection === "about" && (
            <div>
              <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.3em", marginBottom: "32px" }}>
                [PROJECT_INDEX]
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
                {PROJECTS_BRIEF.map((proj, i) => (
                  <div
                    key={proj.name}
                    onClick={() => navigate("/projects")}
                    style={{
                      padding: "32px",
                      border: "1px solid #1E1C18",
                      position: "relative",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.5s ${i * 100}ms, transform 0.5s ${i * 100}ms`,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#FF4800";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#0F0E0B";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "#1E1C18";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    <div style={{ fontSize: "9px", color: "#FF4800", letterSpacing: "0.2em", marginBottom: "12px" }}>
                      {String(i + 1).padStart(3, "0")} — {proj.type.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "22px", color: "#EDE8DF", letterSpacing: "-0.02em", marginBottom: "6px" }}>
                      {proj.name}
                    </div>
                    <div style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.15em", marginBottom: "20px" }}>
                      {proj.period}
                    </div>
                    <div style={{ fontSize: "11px", color: "#6B6555", lineHeight: "1.8", letterSpacing: "0.03em" }}>
                      {proj.desc}
                    </div>

                    {/* View arrow */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        fontSize: "9px",
                        color: "#FF4800",
                        letterSpacing: "0.1em",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      VIEW →
                    </div>
                  </div>
                ))}
              </div>

              {/* Designer credit strip */}
              <div
                style={{
                  marginTop: "48px",
                  padding: "24px",
                  borderTop: "1px solid #1E1C18",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", gap: "24px" }}>
                  {["Service Project", "UX/UI Project", "Product Design"].map((cat) => (
                    <span
                      key={cat}
                      style={{
                        fontSize: "10px",
                        color: "#4A4535",
                        border: "1px solid #2A2820",
                        padding: "6px 16px",
                        letterSpacing: "0.12em",
                        borderRadius: "100px",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#6B6555",
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                >
                  Designer. Park Lee Eun
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom */}
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
            © 2026 PARK_LEE_EUN — ALL_RIGHTS_RESERVED
          </span>
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            peu20816@gmail.com
          </span>
          <span style={{ fontSize: "9px", color: "#4A4535", letterSpacing: "0.2em" }}>
            v2.0.26_STABLE
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ──────────────────────────────────── */

function CornerBracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const isTop = pos.startsWith("t");
  const isLeft = pos.endsWith("l");
  return (
    <div
      style={{
        position: "absolute",
        ...(isTop ? { top: 0 } : { bottom: 0 }),
        ...(isLeft ? { left: 0 } : { right: 0 }),
        width: 32,
        height: 32,
        zIndex: 2,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        {isTop && isLeft && (
          <>
            <line x1="0" y1="0" x2="16" y2="0" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="16" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {isTop && !isLeft && (
          <>
            <line x1="32" y1="0" x2="16" y2="0" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="32" y1="0" x2="32" y2="16" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {!isTop && isLeft && (
          <>
            <line x1="0" y1="32" x2="16" y2="32" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="0" y1="32" x2="0" y2="16" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
        {!isTop && !isLeft && (
          <>
            <line x1="32" y1="32" x2="16" y2="32" stroke="#FF4800" strokeWidth="1.5" />
            <line x1="32" y1="32" x2="32" y2="16" stroke="#FF4800" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </div>
  );
}

function ToolTag({ label, index, visible }: { label: string; index: number; visible: boolean }) {
  return (
    <span
      style={{
        padding: "8px 18px",
        border: "1px solid #1E1C18",
        fontSize: "10px",
        color: "#6B6555",
        letterSpacing: "0.15em",
        transition: `all 0.2s, opacity 0.4s ${index * 60}ms, transform 0.4s ${index * 60}ms`,
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#FF4800";
        (e.currentTarget as HTMLElement).style.color = "#EDE8DF";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#130E09";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E1C18";
        (e.currentTarget as HTMLElement).style.color = "#6B6555";
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {label}
    </span>
  );
}

function EduCard({
  item,
  index,
  visible,
  isAward = false,
  isActivity = false,
}: {
  item: { year: string; title: string; detail: string; tag: string };
  index: number;
  visible: boolean;
  isAward?: boolean;
  isActivity?: boolean;
}) {
  return (
    <div
      style={{
        padding: "24px 28px",
        border: "1px solid #1E1C18",
        marginBottom: "2px",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.5s ${index * 120}ms, transform 0.5s ${index * 120}ms`,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#FF4800";
        (e.currentTarget as HTMLElement).style.backgroundColor = "#0F0E0B";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E1C18";
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      <div style={{ fontSize: "9px", color: isAward ? "#FFB800" : isActivity ? "#00DC6E" : "#FF4800", letterSpacing: "0.2em", marginBottom: "10px" }}>
        {item.year} — {item.tag}
      </div>
      <div style={{ fontSize: "18px", color: "#EDE8DF", letterSpacing: "-0.01em", marginBottom: "4px" }}>
        {item.title}
      </div>
      <div style={{ fontSize: "11px", color: "#6B6555", lineHeight: "1.8", letterSpacing: "0.04em" }}>
        {item.detail}
      </div>

      {/* Index number */}
      <span
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "32px",
          color: "#1A1814",
          letterSpacing: "-0.04em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}