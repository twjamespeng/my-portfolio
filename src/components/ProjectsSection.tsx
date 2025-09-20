"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = items.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", // 👈 提早觸發
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="w-full py-6 md:py-20 bg-gradient-to-b from-[#1a1a1a] to-[#171717]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-6">專案 <span className="text-teal-500">Projects</span></h2>
        <p className="text-gray-300 mb-6 md:mb-3">在 ViVa TV 電商網站 與 ViVa TV 線上客服系統 這兩個專案中，我主要負責介面構思、視覺設計與前端靜態頁面實作。</p>
        <p className="text-gray-300 mb-6">在電商網站部分，我負責全部介面規劃及頁面切版，確保頁面結構清晰並符合使用者體驗；而在客服系統專案中，則專注於即時聊天與報表頁面的互動設計，為後續的系統串接與功能實現奠定基礎。</p>
        <div ref={containerRef} className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40, visibility: "hidden" }}
              animate={
                visibleIndexes.includes(i)
                  ? { opacity: 1, y: 0, visibility: "visible" }
                  : {}
              }
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.15, // stagger
              }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
