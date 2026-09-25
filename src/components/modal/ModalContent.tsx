import dynamic from "next/dynamic";
import { portfolio } from "@/data/portfolio";
import type { ModalId } from "@/components/desktop/modal-registry";

const AboutContent = dynamic(() => import("./content/AboutContent"));
const ContactContent = dynamic(() => import("./content/ContactContent"));
const ListModal = dynamic(() => import("./content/ListModal"));
const ProjectsContent = dynamic(() => import("./content/ProjectsContent"));
const GameContent = dynamic(() => import("./content/GameContent"));

export function ModalContent({ id }: { id: ModalId }) {
  switch (id) {
    case "about":
      return <AboutContent />;
    case "contact":
      return <ContactContent />;
    case "education":
      return <ListModal entries={portfolio.education} />;
    case "experience":
      return <ListModal entries={portfolio.experience} />;
    case "leadership":
      return <ListModal entries={portfolio.leadership} />;
    case "trainings":
      return <ListModal entries={portfolio.trainings} />;
    case "projects":
      return <ProjectsContent />;
    case "game":
      return <GameContent />;
  }
}
