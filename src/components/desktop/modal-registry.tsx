import type { ComponentType } from "react";
import {
  AboutIcon,
  ContactIcon,
  EducationIcon,
  ExperienceIcon,
  GameIcon,
  LeadershipIcon,
  ProjectsIcon,
  TrainingsIcon,
} from "@/components/icons";

export type ModalId =
  | "about"
  | "contact"
  | "education"
  | "experience"
  | "leadership"
  | "trainings"
  | "projects"
  | "game";

export interface ModalDef {
  id: ModalId;
  label: string;
  title: string;
  Icon: ComponentType<{ className?: string }>;
}

export const MODAL_DEFS: ModalDef[] = [
  { id: "about", label: "About", title: "About Me", Icon: AboutIcon },
  { id: "contact", label: "Contact", title: "Contact", Icon: ContactIcon },
  {
    id: "education",
    label: "Educational Background",
    title: "Educational Background",
    Icon: EducationIcon,
  },
  {
    id: "experience",
    label: "Work Experience",
    title: "Work Experience",
    Icon: ExperienceIcon,
  },
  {
    id: "leadership",
    label: "Leadership & Activities",
    title: "Leadership & Activities",
    Icon: LeadershipIcon,
  },
  {
    id: "trainings",
    label: "Trainings & Seminars",
    title: "Trainings & Seminars",
    Icon: TrainingsIcon,
  },
  { id: "projects", label: "Projects", title: "Projects", Icon: ProjectsIcon },
  { id: "game", label: "Game", title: "Game", Icon: GameIcon },
];
