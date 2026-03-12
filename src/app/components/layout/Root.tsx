import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { useEffect, useRef } from "react";

export function Root() {
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.opacity = "0";
      mainRef.current.style.transform = "translateY(8px)";
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          mainRef.current.style.opacity = "1";
          mainRef.current.style.transform = "translateY(0)";
        }
      }, 50);
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A0906",
        fontFamily: "'Space Mono', monospace",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <div ref={mainRef}>
        <Outlet />
      </div>
    </div>
  );
}
