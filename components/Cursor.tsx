"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    const grow = () => {
      dot.style.width = "20px";
      dot.style.height = "20px";
      ring.style.width = "56px";
      ring.style.height = "56px";
    };

    const shrink = () => {
      dot.style.width = "12px";
      dot.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", move);
    document
      .querySelectorAll("a, button, [data-cursor-grow]")
      .forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          width: 12,
          height: 12,
          background: "#f97316",
          transition: "width 0.2s, height 0.2s",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 36,
          height: 36,
          border: "1.5px solid #f97316",
          opacity: 0.6,
          transition: "left 0.12s ease-out, top 0.12s ease-out, width 0.2s, height 0.2s",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
