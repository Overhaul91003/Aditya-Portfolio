import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  FullStackDeveloper,
  ComputerVision,
  genai,
  RBI_Logo,
  BARC_LOGO,
  WebRTC,
  Livekit,
  SummarAIze,
  HustleBot,
  prompttoimage,
  Confera,
  Redis,
  rbi_cert,
  barc_cert,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiance",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: FullStackDeveloper,
  },
  {
    title: "GenAI",
    icon: genai,
  },
  {
    title: "Computer Vision",
    icon: ComputerVision,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "WebRTC",
    icon: WebRTC,
  },
  {
    name: "Livekit",
    icon: Livekit,
  },
  {
    name: "Redis",
    icon: Redis,
  },
  {
    name: "Docker",
    icon: docker,
  }
];

const experiences = [
  {
    title: "FinTech Intern",
    company_name: "Reserve Bank of India",
    icon: RBI_Logo,
    iconBg: "#383E56",
    date: "May 19, 2024 - July 19, 2024",
    points: [
      "Conducted comprehensive analysis on the benefits and challenges of tokenizing financial assets, focusing on blockchain technology and its implications for the financial sector.",
      "Compiled findings into a detailed report, offering strategic recommendations for financial institutions, regulators, investors, and technology providers.",
      "Assisted RBI in policy formulation by presenting research outcomes to senior leadership, contributing to informed decision-making.",
      /*
      "Developed a Tokenized Digital Asset Management System (TDAMS) using React.js for the frontend and Node.js for the backend, demonstrating the practical application of asset tokenization.",
      "Implemented blockchain solutions, such as Hyperledger Fabric or Ethereum, to securely tokenize and manage financial assets, aligning with the research insights on asset tokenization."
      */
      ],
      certificate: rbi_cert,
      github_link: "a",
  },
  {
    title: "Project Trainee",
    company_name: "Bhabha Atomic Research Center",
    icon: BARC_LOGO,
    iconBg: "#E6DEDD",
    date: "Jan 15, 2025 - May 15, 2025",
    points: [
      "Migrated BARC’s legacy Kurento deployment to LiveKit—scaling audio-only rooms to support 3,000 subscribers (with 10 active publishers) at ~80% CPU, and enabling 150-participant 720p group calls at ~85% CPU on a 16-core instance—representing a significant uplift in media capacity.",
      "Developed the React frontend using LiveKit components and custom hooks, featuring a seamless pre-join flow (username, mic/video toggles), dynamic SFU-driven grid layouts, real-time participant management, multi-user audio/video, and a persistent per-room chat panel via localStorage with cross-tab synchronization.",
      "Built a Node.js/Express backend integrating the LiveKit Server SDK to manage room lifecycle (create, list, delete), generate secure AccessTokens, and expose CORS-enabled REST endpoints for token issuance and room control.",
      "Integrated MediaPipe Selfie Segmentation via LiveKit track-processors for real-time background blur and virtual backgrounds at 30 fps, and leveraged LiveKit’s Egress API—deployed in Docker with Redis—to record composite MP4 exports on demand through intuitive Record/Stop controls in the UI.",
      "Implemented a client-side meeting history module to log join and leave times (with durations) alongside a “Recent Meetings” dashboard with Clear All/Delete controls; automated local development with Docker (Redis & Egress), a Windows-hosted LiveKit server, and npm scripts for backend (port 3000) and frontend (port 3001)"
    ],
    certificate: barc_cert,
    github_link: "a",
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SummarAIze",
    description:
      "A web-based platform that leverages Rapid-API's article Summarizer and Extractor API to generate concise summaries of lengthy articles, providing users with a quick and efficient way to process information.",
    tags: [
      /*
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      */
      {
        name: "Node.js",
        color: "neon-green-text-gradient",
      },
      {
        name: "react",
        color: "gold-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "cyan-text-gradient",
      },
    ],
    image: SummarAIze,
    source_code_link: "https://github.com/Overhaul91003/SummarAIze",
  },
  {
    name: "HustleBot-GPT",
    description:
      "A web-based AI chatbot that leverages Retrieval-Augmented Generation (RAG) and OpenAI’s GPT model to provide real-time insights on startups, funding trends, and market shifts, ensuring users stay updated with expert-backed analysis and the latest industry developments.",
    tags: [
      {
        name: "Next.js",
        color: "purple-text-gradient",
      },
      {
        name: "Typescript",
        color: "teal-text-gradient",
      },
      /*
      {
        name: "css",
        color: "blue-text-gradient",
      },
      */
      {
        name: "LangChain.js",
        color: "magenta-text-gradient",
      },
      {
        name: "OpenAI-API",
        color: "silver-text-gradient",
      },
      {
        name: "DataStax",
        color: "bronze-text-gradient",
      },
    ],
    image: HustleBot,
    source_code_link: "https://github.com/Overhaul91003/HustleBot-GPT",
  },
  {
    name: "Prompt2Image",
    description:
      "Prompt2Image is a web-based platform where users can enter their desired prompts, generate AI-created images, and, if they like the result, share it with the community on the home page.",
    tags: [
      /*
      {
        name: "hmtl",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      */
      {
        name: "React",
        color: "gold-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "neon-green-text-gradient",
      },
      {
        name: "Express",
        color: "fire-text-gradient",
      },
      {
        name: "MongoDB",
        color: "bronze-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "sunset-text-gradient",
      },
      {
        name: "OpenAI-Dall.E",
        color: "silver-text-gradient",
      },
    ],
    image: prompttoimage,
    source_code_link: "https://github.com/Overhaul91003/Prompt_2_Image",
  },
  {
    name: "Confera",
    description:
      "Confera is a A Web Based Video Conferencing Application using Livekit Media Server and Livekit Egress Service .",
    tags: [
      /*
      {
        name: "hmtl",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      */
      {
        name: "React",
        color: "gold-text-gradient",
      },
      /*
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      */
      {
        name: "Node.js",
        color: "neon-green-text-gradient",
      },
      {
        name: "Express",
        color: "fire-text-gradient",
      },
      /*
      {
        name: "MongoDB",
        color: "bronze-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "sunset-text-gradient",
      },
      {
        name: "OpenAI-Dall.E",
        color: "silver-text-gradient",
      },
      */
      {
        name: "Docker",
        color: "white-gradient",
      },
      {
        name: "Redis",
        color: "teal-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "bronze-text-gradient",
      },
      {
        name: "Livekit",
        color: "purple-text-gradient",
      },
      
    ],
    image: Confera,
    source_code_link: "https://github.com/Overhaul91003/Confera",
  },
];

export { services, technologies, experiences, testimonials, projects };


