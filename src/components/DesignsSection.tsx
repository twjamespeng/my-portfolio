"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DesignCard from "@/components/DesignCard";
import { designs } from "@/data/designs";

export default function DesignsSection() {
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
            observer.unobserve(entry.target); // 只觸發一次
          }
        });
      },
      {
        threshold: 0,                // 👈 只要進來 1px 就觸發
        rootMargin: "0px 0px -150px 0px", // 👈 提早 150px 觸發
      }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="designs"
      className="w-full py-6 md:py-20 bg-gradient-to-b from-[#1f1f1f] to-[#171717]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-6">設計作品 <span className="text-teal-500">Designs</span></h2>
        <p className="text-lg text-gray-300 mb-6">品牌 Logo 及名片設計</p>
        
        <div ref={containerRef} className="grid sm:grid-cols-2 gap-6">
          {designs.map((p, i) => (
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
                delay: (i % 3) * 0.15, // 👈 以 row 為單位 stagger，而不是全域 index
              }}
            >
              <DesignCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
