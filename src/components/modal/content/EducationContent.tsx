import { portfolio } from "@/data/portfolio";
import { Cutout, GroupBox, Divider } from "react95";

export default function EducationContent() {
  const entries = portfolio.education;

  return (
    <Cutout className="bg-[#c6c6c6] w-full h-full p-1">
      <div className="border-2 border-white border-b-gray-800 border-r-gray-800 p-4 sm:p-6 flex flex-col h-full bg-[#c6c6c6]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-2">
          {/* Classic icon placeholder */}
          <div className="w-10 h-10 bg-[#000080] flex items-center justify-center shrink-0 border-[inset] border-2 border-gray-400">
            <span className="text-white text-xl font-bold">📜</span>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-black">
              Academic Registry
            </h1>
            <p className="text-sm text-gray-700 leading-tight">
              Educational Background & Certifications
            </p>
          </div>
        </div>

        <Divider className="my-4" />

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pr-2 max-h-[50vh] space-y-4 scrollbar-win95">
          {entries.length === 0 ? (
            <p className="text-sm italic text-black">
              No academic records found in the registry.
            </p>
          ) : (
            entries.map((entry) => (
              <GroupBox 
                key={entry.id} 
                label={entry.period || "Record"} 
                className="text-black bg-[#c6c6c6]"
              >
                <div className="p-2 space-y-3">
                  {/* Title and Subtitle */}
                  <div>
                    <h2 className="font-bold text-[#000080] text-base">
                      {entry.title}
                    </h2>
                    {entry.subtitle && (
                      <p className="text-sm font-semibold">{entry.subtitle}</p>
                    )}
                  </div>
                  
                  {/* Sunken text box for the description/bullets */}
                  {entry.description && entry.description.length > 0 && (
                    <Cutout className="bg-white p-2 border border-gray-400">
                      <ul className="list-disc space-y-1 pl-4 text-sm">
                        {entry.description.map((line) => (
                          <li key={line.slice(0, 24)}>{line}</li>
                        ))}
                      </ul>
                    </Cutout>
                  )}

                  {/* 3D raised tags for courses or skills */}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="mt-2 text-xs text-black flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-[#c6c6c6] border border-white border-b-gray-800 border-r-gray-800 px-2 py-0.5"
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