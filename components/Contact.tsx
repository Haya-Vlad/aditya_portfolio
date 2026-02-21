"use client";
import { useState } from "react";
import FadeUp from "./FadeUp";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  { icon: "✉", label: "aditya.gohil115@gmail.com", href: "mailto:aditya.gohil115@gmail.com" },
  { icon: "📞", label: "+91 84549 40794", href: "tel:+918454940794" },
  { icon: "in", label: "linkedin.com/in/aditya-gohil-ag115", href: "https://www.linkedin.com/in/aditya-gohil-ag115/" },
  { icon: "⌥", label: "github.com/Haya-Vlad", href: "https://github.com/Haya-Vlad" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setStatus("sent");
    setTimeout(() => { setStatus("idle"); (e.target as HTMLFormElement).reset(); }, 3000);
  };
  return (
    <section id="contact" className="section-divider py-28 max-w-6xl mx-auto px-8 md:px-16">
      <SectionHeader num="05 /" title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <FadeUp>
          <h2 className="font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.02em" }}>
            Let&apos;s build something<br /><span style={{ color: "#f97316" }}>real.</span>
          </h2>
          <p className="font-mono text-sm leading-relaxed mb-8" style={{ color: "#666" }}>Whether it&apos;s an embedded project, PCB design, or IoT &amp; Edge AI collaboration — I&apos;m open to interesting problems. Drop a message and I&apos;ll get back to you.</p>
          <div className="flex flex-col gap-0">
            {contactLinks.map(cl => (
              <a key={cl.label} href={cl.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 font-mono text-sm py-3 transition-colors duration-200" style={{ color: "#666", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={e => e.currentTarget.style.color = "#f97316"} onMouseLeave={e => e.currentTarget.style.color = "#666"}>
                <span className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>{cl.icon}</span>
                {cl.label}
              </a>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[{ label: "Name", type: "text", name: "name", placeholder: "Your name" }, { label: "Email", type: "email", name: "email", placeholder: "your@email.com" }].map(f => (
              <div key={f.name} className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "#f97316" }}>{f.label}</label>
                <input type={f.type} name={f.name} placeholder={f.placeholder} required className="font-mono text-sm px-4 py-3 outline-none transition-all duration-200" style={{ background: "#111111", border: "1px solid rgba(249,115,22,0.2)", color: "#e8e8e8" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.boxShadow = "0 0 0 1px #f97316" }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.2)"; e.currentTarget.style.boxShadow = "none" }} />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color: "#f97316" }}>Message</label>
              <textarea name="message" placeholder="Tell me about your project or idea..." rows={5} className="font-mono text-sm px-4 py-3 outline-none resize-none transition-all duration-200" style={{ background: "#111111", border: "1px solid rgba(249,115,22,0.2)", color: "#e8e8e8" }}
                onFocus={e => { e.currentTarget.style.borderColor = "#f97316"; e.currentTarget.style.boxShadow = "0 0 0 1px #f97316" }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.2)"; e.currentTarget.style.boxShadow = "none" }} />
            </div>
            <button type="submit" className="clip-btn font-mono text-xs tracking-widest uppercase py-4 font-bold transition-all duration-200 mt-2" style={{ background: status === "sent" ? "#22c55e" : "#f97316", color: "#000" }}>
              {status === "sent" ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
