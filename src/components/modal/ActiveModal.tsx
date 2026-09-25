import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { ModalId } from "@/components/desktop/modal-registry";

interface ActiveModalProps {
  id: ModalId;
  title: string;
  Icon: ComponentType<{ className?: string }>;
  zIndex: number;
  onFocus: () => void;
  onClose: () => void;
}

const AboutModal = dynamic(() => import("./modals/AboutModal"));
const ContactModal = dynamic(() => import("./modals/ContactModal"));
const EducationModal = dynamic(() => import("./modals/EducationModal"));
const ExperienceModal = dynamic(() => import("./modals/ExperienceModal"));
const LeadershipModal = dynamic(() => import("./modals/LeadershipModal"));
const TrainingsModal = dynamic(() => import("./modals/TrainingsModal"));
const ProjectsModal = dynamic(() => import("./modals/ProjectsModal"));
const GameModal = dynamic(() => import("./modals/GameModal"));

export function ActiveModal({ id, title, Icon, zIndex, onFocus, onClose }: ActiveModalProps) {
  switch (id) {
    case "about":
      return <AboutModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "contact":
      return <ContactModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "education":
      return <EducationModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "experience":
      return <ExperienceModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "leadership":
      return <LeadershipModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "trainings":
      return <TrainingsModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "projects":
      return <ProjectsModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
    case "game":
      return <GameModal title={title} Icon={Icon} zIndex={zIndex} onFocus={onFocus} onClose={onClose} />;
  }
}
