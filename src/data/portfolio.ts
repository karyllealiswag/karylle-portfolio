export interface TimelineEntry {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string[];
  tags?: string[];
}

export interface ProjectEntry {
  id: string;
  name: string;
  role?: string;
  period?: string;
  description: string;
  tags?: string[];
  repoUrl?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  contact: ContactInfo;
  education: TimelineEntry[];
  experience: TimelineEntry[];
  leadership: TimelineEntry[];
  trainings: TimelineEntry[];
  projects: ProjectEntry[];
}

export const portfolio: PortfolioData = {
  name: "Karylle Vinces J. Aliswag",
  role: "BS Computer Science Student · Full-Stack & Data Engineering",
  about: {
    heading: "About Me",
    paragraphs: [
      "Hi, I'm Karylle — a Computer Science student at Pamantasan ng Lungsod ng Maynila with hands-on experience across full-stack development, data engineering, and QA testing.",
      "I've led the development of AI-integrated products during internships at Globe Telecom and Ayala Corporation, working with tools like React.js, BigQuery, and Gemini, and I enjoy taking projects from concept through documentation and delivery.",
      "Outside of building software, I serve as Vice President - Internals of the PLM Computer Science Society, where I help plan organizational events and manage academic concerns for fellow students.",
    ],
  },
  contact: {
    phone: "0926 743 1837",
    email: "karyllealiswag@gmail.com",
    // Not provided in the resume yet — replace with the real profile links.
    linkedin: "https://www.linkedin.com/in/your-placeholder-handle",
    github: "https://github.com/your-placeholder-handle",
  },
  education: [
    {
      id: "edu-1",
      title: "Bachelor of Science in Computer Science",
      subtitle: "Pamantasan ng Lungsod ng Maynila — Intramuros, Manila",
      period: "August 2023 — Present",
    },
    {
      id: "edu-2",
      title: "Senior High School — TVL-ICT",
      subtitle: "Universidad de Manila — Ermita, Manila",
      period: "September 2021 — July 2023",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Data Engineering Intern",
      subtitle: "Globe Telecom Inc.",
      period: "June 2026 — July 2026",
      description: [
        "Led the presentation and full-stack development of DataLoom.",
        "Created schemas and loaded synthetic data through Google Cloud Platform tools such as Google Cloud Storage, BigQuery, and DataForm.",
        "Collaborated with the Network, Analytics, and Insights group and fellow GPP interns.",
      ],
    },
    {
      id: "exp-2",
      title: "AGSIP 2026 Intern",
      subtitle: "Ayala Corporation",
      period: "June 2026 — July 2026",
      description: [
        "Led the presentation and full-stack development of Genie.",
        "Participated in activities and seminars across different Ayala companies and collaborated with their mentors and leaders, along with fellow interns.",
      ],
    },
    {
      id: "exp-3",
      title: "Student Assistant",
      subtitle: "PLM CISTM",
      period: "August 2024 — May 2025",
      description: [
        "Prepared, organized, and maintained office documents in compliance with academic standards.",
        "Collaborated with students, organizations, and faculty members regarding college concerns.",
      ],
    },
  ],
  leadership: [
    {
      id: "lead-1",
      title: "Vice President - Internals",
      subtitle: "PLM Computer Science Society",
      period: "July 2025 — Present",
      description: [
        "Lead the planning and execution of organizational events.",
        "Lead the management of enrollment and academic concerns.",
        "Actively participated in seminars and events hosted by the organization.",
      ],
    },
    {
      id: "lead-2",
      title: "Sponsor Relations Officer",
      subtitle: "PLM CISTM-SC",
      period: "August 2025 — June 2026",
      description: [
        "Drafted and distributed formal letters of request to prospective partners and sponsors, successfully securing support for council initiatives.",
        "Contributed to the planning and execution of college-wide events.",
      ],
    },
    {
      id: "lead-3",
      title: "Auditor",
      subtitle: "PLM CISTM-SC",
      period: "August 2024 — June 2025",
      description: [
        "Earned the most favorable audit opinion from the university's official auditing body, affirming the integrity and accuracy of the council's financial records.",
        "Prepared a comprehensive and transparent financial report documenting the overall transactions and inventory of the student council.",
        "Led the safekeeping, monitoring, and auditing of the council's budget with full transparency.",
      ],
    },
  ],
  // No trainings/seminars/certifications provided yet — add entries here once available.
  trainings: [],
  projects: [
    {
      id: "proj-dataloom",
      name: "DataLoom",
      role: "Full-Stack Developer",
      period: "July 2026",
      description:
        "An AI-integrated data product blueprint generator built for the NAI group of Globe Telecom Inc. Led software development, AI and data engineering, QA testing, and system documentation.",
      tags: ["React.js", "BigQuery", "Gemini", "Vercel"],
      // Private repository — not linked.
    },
    {
      id: "proj-genie",
      name: "Genie",
      role: "Full-Stack Developer",
      period: "July 2026",
      description:
        "An AI-augmented ecosystem for GCash employees. Led software development, AI engineering, and QA testing.",
      tags: ["React.js", "NeonDB", "Gemini", "Vercel"],
      // Private repository — not linked.
    },
    {
      id: "proj-587connect",
      name: "587 Connect",
      role: "Frontend Developer, Documentation Lead",
      period: "March 2026",
      description:
        "A barangay information management system for Barangay 587, Sta. Mesa, Manila. Led documentation and assisted in frontend development and QA testing.",
      tags: ["React.js", "PostgreSQL", "NeonDB", "Vercel"],
      repoUrl: "https://github.com/IJMPLM/587-connect",
    },
    {
      id: "proj-seastack",
      name: "SeaStack",
      role: "Backend Developer, Documentation Lead",
      period: "January 2026",
      description:
        "A functional compiler for a self-made programming language. Led development, documentation, and QA testing.",
      tags: ["Python", "Google Sheets"],
      repoUrl: "https://github.com/yurnifaa/SeaStack-v2",
    },
  ],
};
