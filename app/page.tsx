"use client";

import { useState } from "react";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

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
      {/* Title block (upper right) */}
      <div
        style={{
          position: "absolute",
          top: 64,
          right: 64,
          textAlign: "right",
          color: "black",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Caroline Greene
        </div>

        <div
          style={{
            fontSize: 36,
            letterSpacing: 3,
            marginTop: 10,
          }}
        >
          ARCHITECTURE
        </div>

        <div
          style={{
            fontSize: 36,
            letterSpacing: 3,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 44,
            marginTop: 10,
          }}
        >
          2026
        </div>
      </div>

      {/* Download link (bottom right) */}
      <div
        style={{
          position: "absolute",
          bottom: 64,
          right: 64,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <a
          href="/GREENE_PORTFOLIO_SP2026.pdf"
          download
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            display: "inline-block",
            padding: "16px 22px",
            background: isHovering
              ? "rgba(46, 125, 50, 0.85)" // green hover
              : "rgba(0, 0, 0, 0.6)",    // default gray
            color: "white",
            textDecoration: "none",
            borderRadius: 12,
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
