import { portfolio } from "@/data/portfolio";
import { ProjectsIcon } from "@/components/icons";
import { Cutout, Divider } from "react95";

export default function ProjectsContent() {
  return (
    <Cutout className="bg-[#c6c6c6] w-full h-full p-1">
      <div className="border-2 border-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 flex flex-col h-full bg-[#c6c6c6]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-2">
          {/* Classic File Explorer Folder Icon */}
          <div className="w-10 h-10 bg-[#000080] flex items-center justify-center shrink-0 border-[inset] border-2 border-gray-400">
            <span className="text-white text-xl">📁</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-black">
              Project Explorer
            </h1>
            <p className="text-sm text-gray-700 leading-tight">
              C:\Portfolio\Projects\
            </p>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Main Explorer Window (Sunken White Background) */}
        <Cutout className="flex-1 bg-white p-2 overflow-y-auto max-h-[50vh] scrollbar-win95">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {portfolio.projects.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  // TODO: Wire up your modal state here
                  // e.g., openProjectModal(project)
                  console.log("Trigger modal for:", project.name);
                }}
                className="flex flex-col text-left items-start gap-2 p-3 border border-transparent hover:border-dotted hover:border-gray-400 hover:bg-[#000080] hover:text-white group focus:outline-none focus:bg-[#000080] focus:text-white transition-none"
              >
                <div className="flex items-center gap-3 w-full">
                  {/* Invert the icon color when the blue background is active */}
                  <div className="text-black group-hover:text-white group-hover:invert">
                    <ProjectsIcon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-bold block truncate">
                      {project.name}
                    </span>
                    {(project.role || project.period) && (
                      <span className="text-[11px] italic block truncate opacity-90">
                        {project.role}
                        {project.role && project.period ? " · " : ""}
                        {project.period}
                      </span>
                    )}
                  </div>
                </div>
                
                <span className="text-xs leading-tight line-clamp-2 opacity-90">
                  {project.description}
                </span>
                
                {project.tags && project.tags.length > 0 && (
                  <span className="text-[10px] mt-auto pt-1 opacity-75 line-clamp-1">
                    {project.tags.join(" · ")}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Cutout>

        {/* Classic Win95 Status Bar */}
        <div className="mt-3 flex gap-4 text-xs text-gray-700 pt-2 border-t border-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
          <span>{portfolio.projects.length} object(s)</span>
          <span>|</span>
          <span>Click to execute program</span>
        </div>
        
      </div>
    </Cutout>
  );
}