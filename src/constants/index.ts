export const METADATA = {
  title: "Portfolio | Uday Shankar",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://udayind.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I create amazing web experiences",
];

export const EMAIL = "uday@example.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/uday",
  github: "https://github.com/UdayIND",
  twitter: "https://twitter.com/uday",
  instagram: "https://www.instagram.com/uday",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    blurImage: "/projects/portfolio.jpg",
    description: "My personal portfolio showcasing my work and skills",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://udayind.vercel.app/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  // Add more projects here
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "next",
    "gsap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  userInterface: ["figma", "photoshop"],
  other: ["git", "webpack"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Portfolio v3.0 Launch",
    size: ItemSize.SMALL,
    subtitle: "Redesigned and rebuilt my portfolio with modern technologies",
    slideImage: "/timeline/portfolio.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started Learning Web Development",
    size: ItemSize.SMALL,
    subtitle:
      "Began my journey in web development, learning HTML, CSS, JavaScript, and React",
    slideImage: "/timeline/learning.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

