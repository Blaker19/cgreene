"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/cgreene_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Title block */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? 32 : 64,
          right: isMobile ? "50%" : 64,
          transform: isMobile ? "translateX(50%)" : "none",
          textAlign: isMobile ? "center" : "right",
          color: "black",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600 }}>
          Caroline Greene
        </div>

        <div style={{ fontSize: 18, letterSpacing: 3, marginTop: 10 }}>
          ARCHITECTURE
        </div>

        <div style={{ fontSize: 18, letterSpacing: 3 }}>
          PORTFOLIO
        </div>

        <div style={{ fontSize: 16, marginTop: 10 }}>
          2026
        </div>
      </div>

      {/* Download button */}
      <div
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 64,
          right: isMobile ? 20 : 64,
          left: isMobile ? 20 : "auto",
          display: "flex",
          justifyContent: isMobile ? "center" : "flex-end",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <a
          href="/GREENE_PORTFOLIO_SP2026.pdf"
          download
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            width: isMobile ? "100%" : "auto",
            textAlign: "center",
            padding: isMobile ? "18px 0" : "16px 22px",
            background: isHovering
              ? "rgba(46, 125, 50, 0.85)"
              : "rgba(0, 0, 0, 0.6)",
            color: "white",
            textDecoration: "none",
            borderRadius: 14,
            backdropFilter: "blur(4px)",
            fontSize: 16,
            transition: "background 0.25s ease",
          }}
        >
          Download Portfolio (PDF)
        </a>
      </div>
    </main>
  );
}
