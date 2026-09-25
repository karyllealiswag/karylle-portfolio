import { portfolio } from "@/data/portfolio";

export default function ExperienceContent() {
  const entries = portfolio.experience;

  if (entries.length === 0) {
    return (
      <p className="text-sm italic">
        Nothing listed here yet — check back once this section has been
        updated.
      </p>
    );
  }

  return (
    <ol className="space-y-4 text-sm">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="border-b border-dotted border-current/30 pb-3 last:border-none last:pb-0"
        >
          <p className="font-bold">{entry.title}</p>
          {(entry.subtitle || entry.period) && (
            <p className="text-xs italic">
              {entry.subtitle}
              {entry.subtitle && entry.period ? " · " : ""}
              {entry.period}
            </p>
          )}
          {entry.description && entry.description.length > 0 && (
            <ul className="mt-1 list-disc space-y-0.5 pl-4">
              {entry.description.map((line) => (
                <li key={line.slice(0, 24)}>{line}</li>
              ))}
            </ul>
          )}
          {entry.tags && entry.tags.length > 0 && (
            <p className="mt-1 text-xs">{entry.tags.join(" · ")}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
