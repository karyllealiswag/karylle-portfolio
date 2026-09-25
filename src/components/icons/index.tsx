import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function AboutIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="20" height="24" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <rect x="9" y="8" width="14" height="2" fill="#000080" />
      <rect x="9" y="12" width="14" height="2" fill="#000080" />
      <rect x="9" y="16" width="10" height="2" fill="#000080" />
      <circle cx="22" cy="22" r="6" fill="#000080" stroke="#000" strokeWidth="1" />
      <rect x="21" y="18" width="2" height="2" fill="#fff" />
      <rect x="21" y="21" width="2" height="5" fill="#fff" />
    </IconBase>
  );
}

export function ContactIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="5" y="6" width="22" height="20" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <rect x="5" y="6" width="22" height="5" fill="#800000" />
      <circle cx="16" cy="17" r="4" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="10" y="22" width="12" height="3" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
    </IconBase>
  );
}

export function EducationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polygon points="16,5 29,11 16,17 3,11" fill="#008080" stroke="#000" strokeWidth="1" />
      <rect x="8" y="14" width="16" height="10" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <rect x="8" y="14" width="16" height="3" fill="#ffff00" stroke="#000" strokeWidth="1" />
      <rect x="27" y="12" width="1.5" height="9" fill="#000" />
    </IconBase>
  );
}

export function ExperienceIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="13" width="24" height="14" fill="#808000" stroke="#000" strokeWidth="1.5" />
      <rect x="4" y="13" width="24" height="4" fill="#ffff00" stroke="#000" strokeWidth="1" />
      <rect x="12" y="8" width="8" height="5" fill="none" stroke="#000" strokeWidth="1.5" />
      <rect x="14" y="19" width="4" height="3" fill="#000" />
    </IconBase>
  );
}

export function LeadershipIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="13" y="22" width="6" height="5" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="10" y="27" width="12" height="2" fill="#808080" stroke="#000" strokeWidth="1" />
      <path d="M9 6h14v8a7 7 0 0 1-14 0V6z" fill="#ffff00" stroke="#000" strokeWidth="1.5" />
      <path d="M9 8H5v2a4 4 0 0 0 4 4" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M23 8h4v2a4 4 0 0 1-4 4" fill="none" stroke="#000" strokeWidth="1.5" />
    </IconBase>
  );
}

export function TrainingsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="16" cy="12" r="8" fill="#ffff00" stroke="#000" strokeWidth="1.5" />
      <circle cx="16" cy="12" r="4" fill="#fff" stroke="#000" strokeWidth="1" />
      <polygon points="12,18 8,28 13,26 16,29 19,26 24,28 20,18" fill="#800000" stroke="#000" strokeWidth="1" />
    </IconBase>
  );
}

export function ProjectsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="10" width="24" height="16" fill="#ffff00" stroke="#000" strokeWidth="1.5" />
      <path d="M4 10V8h9l2 2" fill="#ffff00" stroke="#000" strokeWidth="1.5" />
      <rect x="4" y="10" width="24" height="3" fill="#e6e600" />
    </IconBase>
  );
}

export function GameIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="6" height="20" fill="#000080" stroke="#000" strokeWidth="1.5" />
      <circle cx="6" cy="26" r="3" fill="#c0c0c0" stroke="#000" strokeWidth="1" />
      <rect x="16" y="14" width="13" height="10" rx="1" fill="#808080" stroke="#000" strokeWidth="1.5" />
      <circle cx="20" cy="19" r="2" fill="#000" />
      <circle cx="26" cy="17" r="1.3" fill="#800000" />
      <circle cx="26" cy="21" r="1.3" fill="#008000" />
    </IconBase>
  );
}

export function StartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="2" height="24" fill="#000" />
      <rect x="8" y="5" width="18" height="4" fill="#ff0000" stroke="#000" strokeWidth="0.5" />
      <rect x="8" y="9" width="18" height="4" fill="#008000" stroke="#000" strokeWidth="0.5" />
      <rect x="8" y="13" width="18" height="4" fill="#000080" stroke="#000" strokeWidth="0.5" />
      <rect x="8" y="17" width="18" height="4" fill="#ffff00" stroke="#000" strokeWidth="0.5" />
    </IconBase>
  );
}

export function MinimizeGlyph(props: IconProps) {
  return (
    <IconBase viewBox="0 0 12 12" {...props}>
      <rect x="1" y="9" width="7" height="2" fill="#000" />
    </IconBase>
  );
}

export function MaximizeGlyph(props: IconProps) {
  return (
    <IconBase viewBox="0 0 12 12" {...props}>
      <rect x="1" y="1" width="9" height="9" fill="none" stroke="#000" strokeWidth="1.5" />
      <rect x="1" y="1" width="9" height="2" fill="#000" />
    </IconBase>
  );
}

export function CloseGlyph(props: IconProps) {
  return (
    <IconBase viewBox="0 0 12 12" {...props}>
      <line x1="1.5" y1="1.5" x2="9.5" y2="9.5" stroke="#000" strokeWidth="2" />
      <line x1="9.5" y1="1.5" x2="1.5" y2="9.5" stroke="#000" strokeWidth="2" />
    </IconBase>
  );
}
