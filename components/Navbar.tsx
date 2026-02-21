"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(249,115,22,0.12)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <Link
        href="#hero"
        className="font-mono text-base tracking-wider text-accent hover:opacity-80 transition-opacity"
        style={{ color: "#f97316" }}
      >
        AG<span style={{ color: "#e8e8e8" }}>.dev</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative group"
              style={{ color: "#666" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "#f97316" }}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-px w-6 transition-all duration-300"
            style={{ background: "#f97316" }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col md:hidden"
          style={{ background: "rgba(10,10,10,0.97)", borderBottom: "1px solid rgba(249,115,22,0.2)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase px-8 py-4 transition-colors"
              style={{ color: "#666", borderBottom: "1px solid rgba(249,115,22,0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f97316")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
