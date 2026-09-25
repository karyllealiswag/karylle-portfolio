"use client";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { Window, WindowHeader, WindowContent, Button, Cutout, Divider, GroupBox } from "react95";
import { useFocusTrap } from "../useFocusTrap";
import { CloseGlyph, MaximizeGlyph, MinimizeGlyph, ProjectsIcon } from "@/components/icons";
import type { ProjectEntry } from "@/data/portfolio";

interface ProjectDetailModalProps {
  project: ProjectEntry;
  onClose: () => void;
}

const TITLE_ID = "modal-title-project-detail";

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  useFocusTrap(windowRef, onClose);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 sm:p-6"
      onClick={onClose}
    >
      <Window
        ref={windowRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="flex! h-full w-full flex-col! overflow-hidden motion-reduce:transition-none sm:h-auto sm:max-h-[90dvh] sm:w-auto sm:min-w-[500px] sm:max-w-[650px] shadow-xl"
      >
        <WindowHeader className="flex items-center justify-between gap-2 bg-[#000080]">
          <span className="flex min-w-0 items-center gap-2 text-white">
            <ProjectsIcon className="h-4 w-4 shrink-0 invert" aria-hidden="true" />
            <span id={TITLE_ID} className="truncate font-bold tracking-wide">
              {project.name} Properties
            </span>
          </span>
          <span className="flex shrink-0 gap-1">
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5! py-1!">
              <MinimizeGlyph className="h-3 w-3" />
            </Button>
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5! py-1!">
              <MaximizeGlyph className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              aria-label={`Close ${project.name}`}
              onClick={onClose}
              className="px-1.5! py-1! font-bold"
            >
              <CloseGlyph className="h-3 w-3" />
            </Button>
          </span>
        </WindowHeader>

        {/* Increased padding for a less compact, more breathable layout */}
        <WindowContent className="flex min-h-0 grow flex-col p-4! sm:p-6! bg-[#c6c6c6]">
          <div className="flex-1 overflow-y-auto pr-2 pb-2 scrollbar-win95">
            
            {/* General Info Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border-[inset] border-2 border-gray-400 shadow-sm">
                <ProjectsIcon className="h-8 w-8 text-[#000080]" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black leading-tight mb-1">
                  {project.name}
                </h1>
                {(project.role || project.period) && (
                  <p className="text-sm text-gray-800 font-medium">
                    {project.role}
                    {project.role && project.period ? " · " : ""}
                    {project.period}
                  </p>
                )}
              </div>
            </div>

            <Divider className="my-5" />

            {/* Tech Stack GroupBox to visually separate it from the description */}
            <GroupBox label="Technical Components" className="mb-6 text-black bg-[#c6c6c6]">
              <div className="p-3">
                {project.tags && project.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        // Thicker borders, more padding, and specific light/dark edges create a definitive 3D separation
                        className="bg-[#c6c6c6] border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600 px-3 py-1 text-sm font-semibold text-black tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm italic text-gray-700">No specific components listed.</p>
                )}
              </div>
            </GroupBox>

            {/* Description GroupBox */}
            <GroupBox label="Execution Details" className="mb-4 text-black bg-[#c6c6c6]">
              <Cutout className="bg-white p-4 border border-gray-400 mt-2">
                {/* Increased line height for better readability */}
                <p className="text-sm text-black leading-loose">
                  {project.description}
                </p>
              </Cutout>
            </GroupBox>
            
          </div>

          {/* Action Footer */}
          <div className="mt-4 flex shrink-0 items-center justify-end gap-3 pt-4 border-t border-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <Button type="button" className="font-bold min-w-[120px] cursor-pointer">
                  View Repository
                </Button>
              </a>
            )}
            <Button type="button" onClick={onClose} className="min-w-[80px] cursor-pointer">
              OK
            </Button>
          </div>
        </WindowContent>
      </Window>
    </div>,
    document.body,
  );
}