"use client";

import { skills } from "@/data/skills";
import { useState, useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // 點擊區域外就關閉 tooltip
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        setActiveSkill(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 bg-[#111] text-white px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* 標題 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 border-b border-teal-600 inline-block pb-1">
                {category}
              </h3>

              <div className="flex flex-wrap gap-6">
                {items.map((skill) => {
                  const Icon = skill.icon as IconType;
                  const skillKey = `${category}-${skill.name}`;
                  const isActive = activeSkill === skillKey;

                  return (
                    <div key={skillKey} className="relative">
                      {/* Icon 按鈕 */}
                      <motion.button
                        onClick={() =>
                          setActiveSkill(isActive ? null : skillKey)
                        }
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center focus:outline-none cursor-pointer"
                      >
                        <Icon className={`w-12 h-12 ${skill.color}`} />
                        <span className="text-xs mt-1">{skill.name}</span>
                      </motion.button>

                      {/* Tooltip 動畫 */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key="tooltip"
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -top-14 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap z-10"
                          >
                            {skill.name} — {skill.level}%
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-black"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
