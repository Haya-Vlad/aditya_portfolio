import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets:["latin"], weight:["400","600","700","800"], variable:"--font-syne" });
const spaceMono = Space_Mono({ subsets:["latin"], weight:["400","700"], style:["normal","italic"], variable:"--font-space-mono" });

export const metadata: Metadata = {
  title: "Aditya Gohil — Electronics & Embedded Systems Engineer",
  description: "Portfolio of Aditya Gohil — Electronics & Embedded Systems Engineer specializing in firmware, PCB design, IoT, Edge AI, and hardware bring-up.",
  keywords: ["embedded systems","firmware","PCB design","ESP32","STM32","FPGA","IoT","Edge AI","hardware engineer"],
  authors: [{ name: "Aditya Gohil" }],
  openGraph: { title:"Aditya Gohil — Embedded Systems Engineer", description:"Building firmware, hardware & IoT systems that bridge silicon and software.", type:"website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="font-sans bg-bg text-[#e8e8e8]">{children}</body>
    </html>
  );
}
