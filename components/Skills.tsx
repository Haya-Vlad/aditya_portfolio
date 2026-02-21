"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skills = [
  { cat: "Programming", name: "Languages", tags: ["Embedded C","MicroPython","Ladder Logic (PLC)","SQL"] },
  { cat: "Hardware", name: "Platforms & MCUs", tags: ["ESP32","STM32","ATmega","Raspberry Pi","FPGA (Artix-7)","PLC (LOGO)"] },
  { cat: "Design", name: "PCB & Simulation", tags: ["Eagle CAD","Altium","Proteus","Multisim","LTspice","Vivado","Quartus Prime"] },
  { cat: "Software", name: "Dev Tools", tags: ["ESP-IDF","STM32 Cube IDE","VS Code","GitHub"] },
  { cat: "Protocols", name: "Communication", tags: ["SPI","I2C","UART","MQTT","BLE","CAN"] },
  { cat: "Domains", name: "Areas of Interest", tags: ["Edge AI","Embedded Systems","IoT","Product Development","EMI/EMC Testing","RTOS"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-divider py-28 max-w-6xl mx-auto px-8 md:px-16">
      <SectionHeader num="02 /" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div key={skill.name} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:0.55,delay:i*0.07,ease:[0.22,1,0.36,1]}} whileHover={{y:-4}} className="clip-corner group relative overflow-hidden p-7 transition-all duration-300" style={{background:"#111111",border:"1px solid rgba(249,115,22,0.2)"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#f97316";(e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(249,115,22,0.15)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(249,115,22,0.2)";(e.currentTarget as HTMLElement).style.boxShadow="none"}}>
            <div className="absolute top-0 right-0 opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{width:0,height:0,borderLeft:"14px solid transparent",borderTop:"14px solid #f97316"}}/>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase mb-4" style={{color:"#f97316"}}>
              <span className="w-4 h-px" style={{background:"#f97316"}}/>{skill.cat}
            </div>
            <h3 className="text-lg font-bold mb-4">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] tracking-wider px-2.5 py-1 transition-all duration-200" style={{color:"#666",background:"#181818",border:"1px solid rgba(249,115,22,0.12)"}}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
