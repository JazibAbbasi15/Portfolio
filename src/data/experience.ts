export type ExperienceEntry = {
  role: string;
  organization: string;
  location?: string;
  period: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Web Developer",
    organization: "Vision Point",
    location: "F-7, Islamabad",
    period: "Feb 2025 – May 2025",
    points: [
      "Built a SaaS application along with responsive web pages and UI components using React.js and Tailwind CSS as part of the client delivery team.",
      "Collaborated with designers and backend developers to integrate REST APIs and ensure cross-browser, cross-device compatibility.",
    ],
  },
  {
    role: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "2024 – Present",
    points: [
      "Delivered production websites for Education Leagues and PesGlobal Group — frontend, backend, and deployment.",
      "Worked directly with clients through an iterative, feedback-driven process to translate business requirements into shipped features.",
    ],
  },
  {
    role: "Final Year Project — AURA",
    organization: "AI & Blockchain-Powered Social Memory Platform",
    period: "Aug 2025 – May 2026",
    points: [
      "Built a full-stack social memory platform integrating AI-driven personality matching with blockchain-based memory ownership.",
      "Developed the React + Tailwind CSS frontend — responsive UI, auth flows, profile pages, and feed/marketplace interfaces.",
      "Integrated a Three.js 3D 'Orb Field' memory visualization reflecting each memory's OCEAN personality trait profile.",
      "Connected the React frontend, Node/Express backend, and a Python FastAPI personality-modeling microservice via REST APIs.",
      "Tested the end-to-end ERC-721 smart contract flow for memory-NFT minting via MetaMask and ethers.js.",
    ],
  },
];
