import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export const skills = {
  Frontend: [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500", level: 90 },
    { name: "CSS", icon: SiCss3, color: "text-blue-500", level: 90 },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: 90 },
    { name: "React", icon: SiReact, color: "text-blue-400", level: 60 },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-200", level: 60 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", level: 80 },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600", level: 90 },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", level: 50 },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", level: 60 },
    { name: "Express", icon: SiExpress, color: "text-gray-400", level: 60 },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: 60 },
    { name: "Prisma", icon: SiPrisma, color: "text-indigo-400", level: 60 },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "text-orange-500", level: 70 },
    { name: "GitHub", icon: SiGithub, color: "text-white", level: 70 },
  ],
  Design: [
    { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-400", level: 90 },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "text-yellow-500", level: 90 },
    { name: "Figma", icon: SiFigma, color: "text-pink-400", level: 80 },
  ],
};
