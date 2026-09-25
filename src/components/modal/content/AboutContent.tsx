import { portfolio } from "@/data/portfolio";

export default function AboutContent() {
  return (
    <div className="space-y-3 text-sm leading-relaxed">
      <div>
        <h2 className="text-base font-bold">{portfolio.name}</h2>
        <p className="text-xs italic">{portfolio.role}</p>
      </div>
      {portfolio.about.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>
  );
}
