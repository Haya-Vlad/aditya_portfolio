import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  num: string;
  title: string;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <FadeUp className="flex items-center gap-6 mb-16">
      <span className="font-mono text-xs tracking-widest" style={{ color: "#f97316" }}>
        {num}
      </span>
      <h2
        className="text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to right, rgba(249,115,22,0.2), transparent)" }}
      />
    </FadeUp>
  );
}
