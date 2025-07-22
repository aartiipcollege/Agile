"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = (e) => {
      const tag = e.target;
      if (tag.tagName === "H1" || tag.tagName === "H2") {
        gsap.to(cursor, {
          backgroundColor: "#f07e7ea8",
          color: "#fff",
          scale : 2.2,
        });
      } else {
        gsap.to(cursor, {
          backgroundColor: "#ffffffa8",
          color: "#000",
            scale : 1,
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] flex items-center justify-center w-10 h-10 rounded-full bg-white/70 text-black font-semibold text-xs transition-all duration-200"
      style={{
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    >

    </div>
  );
}
