"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const achievements = [
  { icon:"🥇", text:<><strong style={{color:"#fb923c"}}>1st Place</strong> — Circuit Simulation Hackathon for innovative circuit design and implementation.</> },
  { icon:"🥇", text:<><strong style={{color:"#fb923c"}}>1st Place</strong> — Mini Project: Low-Cost Industrial IoT Development Board.</> },
  { icon:"🥈", text:<><strong style={{color:"#fb923c"}}>2nd Place</strong> — Intellify National-Level Hardware Hackathon &amp; Agritech 2026.</> },
  { icon:"🏆", text:<><strong style={{color:"#fb923c"}}>Best Simulation Award</strong> — MSIC for Automatic Power Factor Correction Unit.</> },
  { icon:"👨‍💻", text:<><strong style={{color:"#fb923c"}}>Core Head of Technical Team</strong> — IETE Student Chapter, S.P.I.T. (June 2024 – June 2025). Led workshops &amp; PCB Fabrication Workshops.</> },
  { icon:"📜", text:<><strong style={{color:"#fb923c"}}>Certifications</strong> — MSCIT, AutoCAD-Electrical 2D &amp; 3D, Tata &amp; Siemens E-courses: AC Motors &amp; Drives, Fundamentals of EE.</> },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-divider py-28 max-w-6xl mx-auto px-8 md:px-16">
      <SectionHeader num="04 /" title="Achievements" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.5,delay:i*0.07}} whileHover={{y:-3}}
            className="p-6 transition-all duration-200"
            style={{background:"#111111",border:"1px solid rgba(249,115,22,0.2)",clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)"}}
            onMouseEnter={e=>(e.currentTarget as HTMLElement).style.borderColor="#f97316"}
            onMouseLeave={e=>(e.currentTarget as HTMLElement).style.borderColor="rgba(249,115,22,0.2)"}>
            <span className="text-2xl mb-3 block">{a.icon}</span>
            <p className="font-mono text-sm leading-relaxed" style={{color:"#666"}}>{a.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
