import { portfolio } from "@/data/portfolio";
import { ProjectsIcon } from "@/components/icons";

export default function ProjectsContent() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {portfolio.projects.map((project) => (
        <a
          key={project.id}
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 rounded p-2 text-center hover:bg-black/10"
        >
          <ProjectsIcon className="h-8 w-8" aria-hidden="true" />
          <span className="text-xs font-bold">{project.name}</span>
          {(project.role || project.period) && (
            <span className="text-[11px] italic">
              {project.role}
              {project.role && project.period ? " · " : ""}
              {project.period}
            </span>
          )}
          <span className="text-[11px] leading-tight">{project.description}</span>
          {project.tags && project.tags.length > 0 && (
            <span className="text-[10px]">{project.tags.join(" · ")}</span>
          )}
        </a>
      ))}
    </div>
  );
}
