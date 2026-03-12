import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";

export function Navigation() {
  const [time, setTime] = useState("");
  const [frame, setFrame] = useState(0);
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [glitchText, setGlitchText] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const y = now.getFullYear();
      const mo = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      const h = String(now.getHours()).padStart(2, "0");
      const mi = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${y}.${mo}.${d} — ${h}:${mi}:${s}`);
      setFrame((f) => (f + 1) % 999);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { path: "/", label: "01_HOME" },
    { path: "/profile", label: "02_PROFILE" },
    { path: "/projects", label: "03_PROJECTS" },
  ];

  const glitchChars = "!@#$%^&*<>/\\|[]{}~";

  const triggerGlitch = (label: string) => {
    let count = 0;
    const interval = setInterval(() => {
      setGlitchText((prev) => ({
        ...prev,
        [label]: label
          .split("")
          .map((c) =>
            c === "_" || count > 4
              ? c
              : Math.random() > 0.5
              ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
              : c
          )
          .join(""),
      }));
      count++;
      if (count > 6) {
        clearInterval(interval);
        setGlitchText((prev) => ({ ...prev, [label]: label }));
      }
    }, 60);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ fontFamily: "'Space Mono', monospace", backgroundColor: "rgba(10, 9, 6, 0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #1E1C18" }}>
      <div style={{ maxWidth: "1960px", margin: "0 auto", padding: "0 48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Left: Timestamp */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.1em" }}>{time}</span>
          <span style={{ color: "#1E1C18", fontSize: "10px" }}>|</span>
          <span style={{ fontSize: "10px", color: "#FF4800", letterSpacing: "0.2em" }}>PORTFOLIO_V2.026</span>
        </div>

        {/* Center: Brand */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", fontSize: "11px", color: "#EDE8DF", letterSpacing: "0.3em" }}>
          PARK LEE EUN
        </div>

        {/* Right: Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredItem === item.label;
            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  triggerGlitch(item.label);
                }}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textDecoration: "none",
                  color: isActive ? "#FF4800" : isHovered ? "#FF4800" : "#EDE8DF",
                  transition: "color 0.15s",
                  position: "relative",
                }}
              >
                {isHovered && glitchText[item.label] ? glitchText[item.label] : item.label}
                {isActive && (
                  <span style={{ position: "absolute", bottom: "-16px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", backgroundColor: "#FF4800", borderRadius: "50%" }} />
                )}
              </Link>
            );
          })}
          <span style={{ fontSize: "10px", color: "#4A4535", letterSpacing: "0.1em" }}>
            {String(frame).padStart(3, "0")}
          </span>
        </div>
      </div>
    </nav>
  );
}
