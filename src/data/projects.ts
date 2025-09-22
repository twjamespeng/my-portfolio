import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "petopia",
    title: "Petopia 寵物平台",
    summary: "一個以「寵物為家人」理念打造的一站式平台",
    tech: ["Next.js", "Tailwind CSS", "Express", "Prisma ORM", "MySQL"],
    thumbnailUrl: "/thumbnails/petopia.jpg",
    repoUrl: "https://github.com/twjamespeng/mfee65-pet",
    pdfUrl: "https://twjamespeng.github.io/my-portfolio/petopia.pdf",
  },
  {
    slug: "vivatv",
    title: "ViVa TV 電商網站",
    summary: "提供多樣化產品與會員系統的電商平台。",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnailUrl: "/thumbnails/viva-home.jpg",
    demoUrl: "https://twjamespeng.github.io/viva-home-demo/",
    repoUrl: "https://github.com/twjamespeng/viva-home-demo",
  },
  {
    slug: "vivatv-customer-support",
    title: "ViVa TV 線上客服系統",
    summary: "提供即時聊天與報表分析的客服系統。",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnailUrl: "/thumbnails/viva-cs.jpg",
    demoUrl: "https://twjamespeng.github.io/customer-support-demo/",
    repoUrl: "https://github.com/twjamespeng/customer-support-demo",
  },
];
