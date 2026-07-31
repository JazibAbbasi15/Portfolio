export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "aura",
    title: "AURA",
    tagline: "AI & blockchain-powered social memory platform",
    description:
      "A full-stack social platform where users share emotional memories through text, images, or video. AI analyzes content for Big Five (OCEAN) personality traits, powering a personalized feed and an interactive 3D 'Orb Field' memory visualization, while blockchain-based NFTs give memories verifiable ownership.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    tech: [
      "React 19",
      "Tailwind CSS",
      "Three.js",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "Solidity",
      "ethers.js",
    ],
    highlights: [
      "Big Five (OCEAN) personality analysis via Gemini AI",
      "Vector similarity feed powered by Qdrant",
      "ERC-721 memory-NFT minting tested end-to-end with MetaMask",
      "Built the React + Tailwind frontend, auth flows, and feed/marketplace UI",
    ],
    repoUrl: "https://github.com/AsharFiaz/AURA.git",
    featured: true,
  },
  {
    slug: "car-rental",
    title: "Car Rental App",
    tagline: "Full-stack vehicle booking & fleet management platform",
    description:
      "A full-stack car rental application where renters book vehicles and owners manage inventory, bookings, and revenue through an interactive dashboard, complete with JWT auth, image optimization, and booking receipts.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "JWT authentication for renters and owners",
      "Owner dashboard with car, booking, and revenue analytics",
      "Image optimization via ImageKit.io CDN",
      "Booking receipts and invoice generation",
    ],
    repoUrl: "https://github.com/JazibAbbasi15/Car-rental.git",
    featured: true,
  },
  {
    slug: "foodify",
    title: "Foodify",
    tagline: "Food ordering platform for a restaurant client",
    description:
      "A complete food ordering platform built for Bagh-e-Zaitoon restaurant — customers browse categorized menus, order, and pay online, while a parallel admin dashboard handles inventory and order management.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    tech: ["React.js", "React Router", "Context API", "Node.js", "Express.js", "MongoDB", "Stripe"],
    highlights: [
      "Categorized menu browsing (BBQ, Steaks, Tandoori, Chinese, and more)",
      "Stripe payment processing with order status tracking",
      "JWT-based customer authentication",
      "Admin panel for inventory, categories, and orders",
    ],
    repoUrl: "https://github.com/JazibAbbasi15/Foodify.git",
    featured: true,
  },
  {
    slug: "pes-global",
    title: "PES Global",
    tagline: "Enterprise Next.js platform for PesGlobal Group",
    description:
      "A production website and application architecture delivered for PesGlobal Group, built on a modern enterprise-grade Next.js 15 template with a clean, service-layer-driven structure.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Zustand", "React Query", "Zod"],
    highlights: [
      "App Router architecture with route-grouped APIs",
      "Service layer abstraction keeping handlers thin",
      "Type-safe forms with React Hook Form + Zod validation",
      "Delivered frontend, backend, and deployment for the client",
    ],
    repoUrl: "https://github.com/ammar-tahir012/pesglobal.git",
    liveUrl: "https://pesglobalgroup.com",
    featured: true,
  },
  {
    slug: "fortva",
    title: "Fortva",
    tagline: "Enterprise document & contract lifecycle management",
    description:
      "An enterprise-grade Document Management System (DMS) and Contract Lifecycle Management (CLM) platform for secure document storage, contract administration, and workflow automation.",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    tech: ["Node.js", "TypeScript", "MongoDB", "Docker", "AWS", "pnpm"],
    highlights: [
      "Secure document storage and contract lifecycle workflows",
      "Modular, multi-package monorepo architecture",
      "Docker + AWS-ready infrastructure",
    ],
    repoUrl: "https://github.com/AsharFiaz/fortva.git",
  },
  {
    slug: "pet-classifier",
    title: "Pet Classifier",
    tagline: "Deep learning REST API for image classification",
    description:
      "A Flask-based REST API that classifies images as cats or dogs using a CNN built with TensorFlow/Keras, built as a semester project for an MSc program in Biometrics and Intelligent Vision.",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902861a?q=80&w=1200&auto=format&fit=crop",
    tech: ["Python", "TensorFlow/Keras", "Flask", "OpenCV", "NumPy", "Gunicorn"],
    highlights: [
      "CNN model served through a /predict REST endpoint",
      "Confidence-threshold logic for cat / dog / neither classification",
      "Input validation for file type and size",
      "Deployed with Gunicorn, tested via Postman",
    ],
    repoUrl: "https://github.com/JazibAbbasi15/PetClassifier.git",
  },
];
