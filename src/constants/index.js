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
  RBI_Logo,
  BARC_LOGO,
  WebRTC,
  Livekit,
  SummarAIze,
  HustleBot,
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
      "Developed a Tokenized Digital Asset Management System (TDAMS) using React.js for the frontend and Node.js for the backend, demonstrating the practical application of asset tokenization.",
      "Implemented blockchain solutions, such as Hyperledger Fabric or Ethereum, to securely tokenize and manage financial assets, aligning with the research insights on asset tokenization."
    ],
  },
  {
    title: "Project Trainee",
    company_name: "Bhabha Atomic Research Center",
    icon: BARC_LOGO,
    iconBg: "#E6DEDD",
    date: "Jan 15, 2025 - Present",
    points: [
      "Developing a WebRTC-powered video conferencing application for Bhabha Atomic Research Center (BARC) using LiveKit Media Server to enhance scalability and performance over their existing Kurento-based system.",
      "Implementing the frontend using React with LiveKit components and developing the backend using Node.js, integrating LiveKit SDK for real-time communication.",
      "Enabling multi-user video & audio conferencing, chat messaging, and other essential video conferencing functionalities using LiveKit’s SFU architecture for efficient media streaming.",
      "Integrating MediaPipe AI for real-time background blur and implementing LiveKit Egress API for room recording, enhancing user experience and usability.",
      "Working on a functional prototype to demonstrate LiveKit’s capabilities, providing documentation and insights for potential integration into BARC’s infrastructure."
    ],
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
      "A web-based platform that leverages Rapid API's article Summarizer and Extractor API to generate concise summaries of lengthy articles, providing users with a quick and efficient way to process information.",
    tags: [
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
      {
        name: "css",
        color: "blue-text-gradient",
      },
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };


