import FadeUp from "./FadeUp";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const experience = [
  { role: "R&D Technician — Selec Controls Pvt. Ltd.", period: "Dec 2023 – July 2024", desc: "Hardware/software validation & debugging. Revamped MVA591 to industrial standards. EMI/EMC compliance testing for IEC61326-1 products." },
  { role: "Freelance CAD Designer", period: "Sept 2023 – Dec 2023", desc: "Cable tray routing, earthing & lighting layouts for electrical & chemical plants. BOQ generation for multiple projects." },
  { role: "Engineer Intern — Techtron Pvt. Ltd.", period: "June 2022 – July 2022", desc: "Hands-on across SMD mounting, Quality Assurance, production and logistics at a core electronics company." },
  { role: "Electrician Trade Apprentice — Siemens Ltd.", period: "Oct 2018 – Sept 2020", desc: "Siemens switchgears & drives expertise. Completed National Vocational Training Certification." },
];
const stats = [
  { num: "4+", label: "Years in Industry" }, { num: "4+", label: "Hackathon Awards" },
  { num: "4+", label: "Real Projects" }, { num: "∞", label: "Coffee Consumed" },
];

export default function About() {
  return (
    <section id="about" className="section-divider py-28 max-w-6xl mx-auto px-8 md:px-16">
      <SectionHeader num="01 /" title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <FadeUp>
          <div className="relative mx-auto md:mx-0 max-w-[280px]">
            <div className="clip-corner-lg w-full circuit-grid overflow-hidden relative" style={{ aspectRatio: "2/3", background: "#181818", border: "1px solid rgba(249,115,22,0.2)" }}>
              <Image src="/pfp.jpg" alt="Aditya Gohil" fill style={{ objectFit: "cover", objectPosition: "center top" }} className="rounded-sm" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-4/5 h-4/5 pointer-events-none" style={{ border: "1px solid rgba(249,115,22,0.3)", clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))" }} />
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="flex flex-col gap-4 font-mono text-sm leading-relaxed" style={{ color: "#666" }}>
            <p>Hey, I&apos;m <span style={{ color: "#fb923c" }}>Aditya Gohil</span> — an electronics &amp; embedded systems engineer pursuing <span style={{ color: "#fb923c" }}>B.Tech in Electronics &amp; Telecommunication</span> (Minors in CS) at Sardar Patel Institute of Technology, Mumbai.</p>
            <p>I specialize in <span style={{ color: "#fb923c" }}>hardware bring-up, firmware development, and IoT product design</span> — from Altium/Eagle PCB layout to bare-metal Embedded C, signal conditioning, and AI/ML on edge hardware. Real industry experience at <span style={{ color: "#fb923c" }}>Selec Controls</span> and <span style={{ color: "#fb923c" }}>Siemens Ltd.</span></p>
            <p>Deeply passionate about <span style={{ color: "#fb923c" }}>Edge AI, embedded systems, and product development</span> — things that work reliably in the physical world.</p>
            <div className="flex items-center gap-3 mt-3 mb-2 text-[10px] tracking-[0.15em] uppercase" style={{ color: "#f97316" }}>
              <span className="w-4 h-px" style={{ background: "#f97316" }} />Experience
            </div>
            <div className="flex flex-col" style={{ borderLeft: "1px solid rgba(249,115,22,0.2)", marginLeft: "4px" }}>
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-5 pb-5 last:pb-0">
                  <div className="absolute left-[-4px] top-[6px] w-2 h-2 rounded-full" style={{ background: "#f97316" }} />
                  <div className="font-bold text-sm mb-0.5" style={{ color: "#e8e8e8" }}>{exp.role}</div>
                  <div className="text-[11px] tracking-wider mb-1" style={{ color: "#f97316" }}>{exp.period}</div>
                  <div className="text-xs leading-relaxed">{exp.desc}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 mt-2" style={{ border: "1px solid rgba(249,115,22,0.2)" }}>
              {stats.map(s => (
                <div key={s.label} className="p-5" style={{ background: "#111111", border: "1px solid rgba(249,115,22,0.2)" }}>
                  <span className="block text-3xl font-extrabold font-mono mb-1" style={{ color: "#f97316" }}>{s.num}</span>
                  <span className="text-[10px] tracking-widest uppercase" style={{ color: "#666" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
