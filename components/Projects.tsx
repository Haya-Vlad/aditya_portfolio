"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const projects = [
  {
    num: "01",
    name: "Low-Cost Industrial IoT Development Board",
    badge: "🥇 1st Place",
    desc: "Custom development board using AVR microcontroller supporting multiple comm. protocols and extended IO expansion.",
    fullDesc: "This project involved the complete design and hardware bring-up of an industrial-grade IoT development board. Key features include support for SPI, I2C, and UART protocols, along with dedicated expansion headers for industrial sensors. I handled everything from schematic design in Eagle CAD to manual SMD assembly and rigorous validation testing for EMI/EMC compliance.",
    tags: ["AVR uC", "SMD Assembly", "SPI", "I2C", "UART", "Eagle CAD"],
    href: "#",
    gallery: ["/project1-1.jpg", "/project1-2.jpg"] // Placeholders
  },
  {
    num: "02",
    name: "Smart Energy Management System",
    badge: "🥈 2nd Place",
    desc: "Hardware-software solution to monitor and optimize real-time energy consumption with AI/ML insights.",
    fullDesc: "A comprehensive energy management platform that leverages ESP32 for high-frequency sampling and a Raspberry Pi local server for data processing. It uses MQTT for reliable messaging and includes a time-series database to feed AI/ML models that detect power consumption anomalies and equipment failures.",
    tags: ["ESP32", "Raspberry Pi", "MQTT", "AI/ML", "Time-Series DB", "PCB Design"],
    href: "#",
    gallery: ["/project2-1.jpg"]
  },
  {
    num: "03",
    name: "Automatic Power Factor Correction Unit",
    badge: "🏆 Best Simulation",
    desc: "ESP32-based APFC unit with integrated OP-AMP circuits for voltage & current sensing.",
    fullDesc: "Designed to improve industrial power efficiency, this unit automatically compensates for reactive power. It features precision analog signal conditioning circuits using low-noise OP-AMPs and an ESP32-based PID control algorithm. I designed the multi-layer PCB in Altium and validated its performance against industrial simulation standards.",
    tags: ["ESP32", "OP-AMP", "PCB Design", "Signal Conditioning", "Altium"],
    href: "#",
    gallery: ["/project3-1.jpg"]
  },
  {
    num: "04",
    name: "Smart Agriculture System",
    badge: "IETE National Hackathon",
    desc: "ESP32-based system integrating sensors and controls for optimized farming.",
    fullDesc: "Developed for the IETE National Hackathon, this system monitors soil moisture, temperature, and humidity to automate irrigation. It includes custom sensor interface circuits and a robust firmware architecture that ensures connectivity even in remote agricultural environments. Built with a focus on low power consumption and reliability.",
    tags: ["ESP32", "OP-AMP", "Sensor Fusion", "I2C", "Signal Conditioning"],
    href: "#",
    gallery: ["/project4-1.jpg"]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="section-divider py-28 max-w-6xl mx-auto px-8 md:px-16">
      <SectionHeader num="03 /" title="Projects" />

      <div style={{ border: "1px solid rgba(249,115,22,0.2)" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col md:grid md:items-center gap-4 p-7 md:p-8 transition-colors duration-200"
            style={{ background: "#111111", borderBottom: i < projects.length - 1 ? "1px solid rgba(249,115,22,0.2)" : "none", gridTemplateColumns: "auto 1fr auto", cursor: "pointer" }}
            onClick={() => setSelectedProject(p)}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#181818"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#111111"}>

            <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 origin-bottom" initial={{ scaleY: 0 }} whileHover={{ scaleY: 1 }} transition={{ duration: 0.25 }} style={{ background: "#f97316" }} />
            <span className="font-mono text-xs tracking-wider min-w-[2rem] hidden md:block" style={{ color: "rgba(249,115,22,0.5)" }}>{p.num}</span>
            <div>
              <h3 className="text-lg font-bold mb-1 transition-colors duration-200 group-hover:text-[#f97316] flex flex-wrap items-center gap-2">
                {p.name}
                <span className="font-mono text-[10px] font-bold px-2 py-0.5" style={{ background: "#f97316", color: "#000" }}>{p.badge}</span>
              </h3>
              <p className="font-mono text-sm leading-relaxed mb-3" style={{ color: "#666" }}>{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="font-mono text-[10px] tracking-wider px-2.5 py-1" style={{ color: "#fb923c", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ color: "#f97316" }}>See More</span>
              <span className="text-2xl hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" style={{ color: "#f97316" }}>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Backdrop & Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
              style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(8px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[1001] pointer-events-none flex items-center justify-center p-4 md:p-8"
            >
              <div
                className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto clip-corner-lg bg-[#0a0a0a] relative"
                style={{ border: "1px solid rgba(249,115,22,0.3)", boxShadow: "0 0 50px rgba(249,115,22,0.1)" }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center font-mono text-xl transition-all hover:rotate-90"
                  style={{ color: "#f97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
                >
                  ✕
                </button>

                <div className="p-8 md:p-12">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: "#f97316" }}>
                    Project {selectedProject.num} / Detailed Brief
                  </span>

                  <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: "#e8e8e8", letterSpacing: "-0.02em" }}>
                    {selectedProject.name}
                  </h2>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] tracking-wider px-3 py-1.5" style={{ color: "#fb923c", background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.15)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                    <div className="md:col-span-3">
                      <p className="font-mono text-sm leading-[1.8] text-[#999] mb-8">
                        {selectedProject.fullDesc}
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase" style={{ color: "#f97316" }}>
                          <span className="w-6 h-px" style={{ background: "#f97316" }} /> Hardware Specs & Stack
                        </div>
                        <p className="font-mono text-xs leading-relaxed text-[#666]">
                          High-performance signal conditioning, multi-layer high-speed digital design, and robust bare-metal firmware kernels. Validated against IEC standards for industrial reliability.
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-4">
                      {/* Image Placeholders */}
                      {selectedProject.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          className="clip-corner w-full aspect-video circuit-grid bg-[#111] flex items-center justify-center relative overflow-hidden group"
                          style={{ border: "1px solid rgba(249,115,22,0.15)" }}
                        >
                          {/* In a real scenario, use <Image src={img} ... /> */}
                          <div className="text-[10px] font-mono uppercase tracking-widest opacity-20" style={{ color: "#f97316" }}>
                            [ Project Visual {idx + 1} ]
                          </div>
                          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      ))}
                      <div className="p-5 clip-corner bg-[#111] border border-white/5">
                        <span className="block font-mono text-[10px] tracking-widest uppercase mb-2" style={{ color: "#f97316" }}>Status</span>
                        <span className="font-mono text-sm text-[#e8e8e8]">Production Ready / Validated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
