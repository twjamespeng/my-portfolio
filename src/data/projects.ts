import { Project } from "@/types/project";

export const projects: Project[] = [
  // {
  //   slug: "petopia",
  //   title: "Petopia 寵物生活平台",
  //   summary: "整合電商、餐廳、旅遊、地圖與論壇的全方位平台。",
  //   tech: ["Next.js", "Tailwind CSS", "Express", "Prisma"],
  //   demoUrl: "https://twjamespeng.github.io/petopia/",
  //   repoUrl: "https://github.com/twjamespeng/petopia",
  // },
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
