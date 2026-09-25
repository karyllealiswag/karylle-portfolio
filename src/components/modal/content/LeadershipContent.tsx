import { portfolio } from "@/data/portfolio";
import { Cutout, GroupBox, Divider } from "react95";

export default function LeadershipContent() {
  const entries = portfolio.leadership;

  return (
    <Cutout className="bg-[#c6c6c6] w-full h-full p-1">
      <div className="border-2 border-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 flex flex-col h-full bg-[#c6c6c6]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-2">
          {/* Classic icon placeholder for user groups/leadership */}
          <div className="w-10 h-10 bg-[#000080] flex items-center justify-center shrink-0 border-[inset] border-2 border-gray-400">
            <span className="text-white text-xl">👥</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-black">
              Directory Services
            </h1>
            <p className="text-sm text-gray-700 leading-tight">
              Organizational Roles & Community Leadership
            </p>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pr-2 max-h-[50vh] space-y-5 scrollbar-win95">
          {entries.length === 0 ? (
            <p className="text-sm italic text-black">
              No active administrative roles assigned to this user profile.
            </p>
          ) : (
            entries.map((entry) => (
              <GroupBox 
                key={entry.id} 
                label={entry.period || "Active Term"} 
                className="text-black bg-[#c6c6c6]"
              >
                <div className="p-3">
                  {/* Title and Subtitle with extra bottom margin for readability */}
                  <div className="mb-3">
                    <h2 className="font-bold text-[#000080] text-base">
                      {entry.title}
                    </h2>
                    {entry.subtitle && (
                      <p className="text-sm font-semibold text-gray-800 mt-0.5">
                        {entry.subtitle}
                      </p>
                    )}
                  </div>
                  
                  {/* Sunken text box for responsibilities with increased line spacing */}
                  {entry.description && entry.description.length > 0 && (
                    <Cutout className="bg-white p-3 border border-gray-400 mb-3">
                      <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed">
                        {entry.description.map((line) => (
                          <li key={line.slice(0, 24)}>{line}</li>
                        ))}
                      </ul>
                    </Cutout>
                  )}

                  {/* 3D raised tags separated clearly from the text box */}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="mt-3 text-xs text-black flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-[#c6c6c6] border border-white border-b-gray-800 border-r-gray-800 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GroupBox>
            ))
          )}
        </div>
      </div>
    </Cutout>
  );
}