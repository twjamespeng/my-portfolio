"use client";

import type { Design } from "@/types/design";
import Image from "next/image";
import { withBasePath } from "@/utils/withBasePath";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function DesignCard({
  title,
  summary,
  tech,
  demoUrl,
  thumbnailUrl,
}: Design) {
  const resolvedThumbnail = thumbnailUrl ? withBasePath(thumbnailUrl) : null;
  const [isOpen, setIsOpen] = useState(false);

  // ✅ ESC 鍵關閉 modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* 卡片 */}
      <div className="border border-teal-800 rounded-xl p-5 shadow-sm hover:shadow-md bg-transparent hover:bg-teal-900/30 transition-all duration-300 flex flex-col">
        {resolvedThumbnail && (
          <button
            onClick={() => setIsOpen(true)}
            className="block overflow-hidden cursor-pointer"
          >
            <Image
              src={resolvedThumbnail}
              alt={title}
              width={600}
              height={310}
              priority={false}
              className="rounded-md mb-2 hover:scale-105 transition-transform duration-300 ease-in-out"
              title={title}
            />
          </button>
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm flex-1">{summary}</p>

        <ul className="flex flex-wrap gap-2 mt-3">
          {tech.map((t) => (
            <li
              key={t}
              className="text-xs px-2 py-1 border border-teal-500 rounded-full text-teal-500"
            >
              {t}
            </li>
          ))}
        </ul>

        {resolvedThumbnail && (
          <div className="mt-4 flex space-x-3">
            <button
              onClick={() => setIsOpen(true)}
              className="px-3 py-1 text-sm bg-teal-500 text-white rounded hover:bg-teal-600 cursor-pointer"
            >
              View
            </button>
          </div>
        )}
      </div>

      {/* Modal with transition */}
      <AnimatePresence>
        {isOpen && demoUrl && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // 背景點擊關閉
          >
            <motion.div
              key="modal"
              className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()} // 防止冒泡
            >
              {/* 關閉按鈕 */}
              <button
                className="absolute top-2 right-2 text-white text-2xl cursor-pointer z-20"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              {/* Image */}
              <Image
                src={demoUrl}
                alt={title}
                fill
                className="object-contain rounded-md cursor-default"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
