"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const fadeUp = (delay: number) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } });
const badges = ["ESP32 & STM32", "FPGA — Artix-7", "Edge AI", "PCB Design", "IoT", "Altium / Eagle"];
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.07]" viewBox="0 0 600 800" fill="none">
          <rect x="100" y="50" width="400" height="700" rx="2" stroke="#f97316" strokeWidth="0.5" />
          <line x1="100" y1="150" x2="500" y2="150" stroke="#f97316" strokeWidth="0.5" />
          <line x1="100" y1="300" x2="500" y2="300" stroke="#f97316" strokeWidth="0.5" />
          <line x1="100" y1="450" x2="500" y2="450" stroke="#f97316" strokeWidth="0.5" />
          <line x1="100" y1="600" x2="500" y2="600" stroke="#f97316" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="200" y2="750" stroke="#f97316" strokeWidth="0.5" />
          <line x1="350" y1="50" x2="350" y2="750" stroke="#f97316" strokeWidth="0.5" />
          <circle cx="200" cy="150" r="6" stroke="#f97316" strokeWidth="1" />
          <circle cx="200" cy="300" r="6" stroke="#f97316" strokeWidth="1" fill="#f97316" />
          <circle cx="350" cy="450" r="6" stroke="#f97316" strokeWidth="1" fill="#f97316" />
          <rect x="145" y="230" width="110" height="50" rx="2" stroke="#f97316" strokeWidth="0.8" />
          <rect x="300" y="380" width="110" height="50" rx="2" stroke="#f97316" strokeWidth="0.8" />
        </svg>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)" }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-8 md:px-16 w-full">
        <motion.div {...fadeUp(0.2)} className="flex items-center gap-3 mb-6 font-mono text-xs tracking-[0.18em] uppercase" style={{ color: "#f97316" }}>
          <span className="w-8 h-px" style={{ background: "#f97316" }} />Electronics &amp; Embedded Systems Engineer
        </motion.div>
        <motion.h1 {...fadeUp(0.4)} className="font-extrabold leading-[0.95] tracking-tight mb-6" style={{ fontSize: "clamp(3.5rem,9vw,8rem)", letterSpacing: "-0.02em" }}>
          <span className="block" style={{ color: "#e8e8e8" }}>Aditya</span>
          <span className="block" style={{ color: "transparent", WebkitTextStroke: "1.5px #f97316" }}>Gohil.</span>
        </motion.h1>
        <motion.p {...fadeUp(0.6)} className="font-mono max-w-xl mb-5 leading-relaxed" style={{ fontSize: "clamp(0.85rem,1.5vw,1rem)", color: "#666" }}>
          Building <span style={{ color: "#fb923c" }}>firmware, hardware &amp; IoT systems</span> that bridge silicon and software. From <span style={{ color: "#fb923c" }}>custom PCB design</span> to bare-metal Embedded C — engineering products that work reliably in the real world.
        </motion.p>
        <motion.div {...fadeUp(0.75)} className="flex flex-wrap gap-2 mb-10">
          {badges.map(b => (
            <span key={b} className="font-mono text-[11px] tracking-wider px-3 py-1" style={{ color: "#f97316", border: "1px solid rgba(249,115,22,0.2)", background: "rgba(249,115,22,0.08)" }}>{b}</span>
          ))}
        </motion.div>
        <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="clip-btn font-mono text-xs tracking-widest uppercase px-8 py-3.5 font-bold transition-all duration-200"
            style={{ background: "#f97316", color: "#000" }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="clip-btn font-mono text-xs tracking-widest uppercase px-8 py-3.5 font-bold transition-all duration-200"
            style={{ background: "transparent", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)" }}
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
