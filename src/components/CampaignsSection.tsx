"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CampaignCard from "@/components/CampaignCard";
import { campaigns } from "@/data/campaigns";

export default function CampaignsSection() {
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
      id="campaigns"
      className="w-full py-6 md:py-20 bg-gradient-to-b from-[#1f1f1f] to-[#171717]"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-6">行銷活動頁 <span className="text-teal-500">Campaigns</span></h2>
        <p className="text-lg text-gray-300 mb-6">行銷活動頁部份，我負責<span className="text-teal-500 font-semibold mx-1">頁面切版、動畫特效、商品動態導入</span>，提升活動頁的互動感與靈活度。</p>
        <ul className="list-disc text-gray-400 mb-6 ps-4">
          <li>頁面：以Bootstrap框架為基礎，進行手刻RWD切版</li>
          <li>特效：針對行銷需求提供特效發想，以線上實例為參考，必要時搭配第三方套件(例如Particle.js、GSAP)來進行實做</li>
          <li>商品：讀取JSON檔案並導入商品資訊，支援動態曝光、變價</li>
        </ul>
        <div ref={containerRef} className="grid sm:grid-cols-3 gap-6">
          {campaigns.map((p, i) => (
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
              <CampaignCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
