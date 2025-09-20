"use client";

import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import type { Variants, MotionValue } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type {
  IOptions,
  InteractivityDetect,
  RecursivePartial,
} from "@tsparticles/engine";

// ====== 父容器動畫 ======
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.1 },
  },
};

// ====== 子元素動畫 ======
const headingVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const subheadingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const taglineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const buttonGroupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ====== 顏色 & 形狀 ======
const colors = ["bg-teal-500", "bg-purple-500", "bg-pink-400", "bg-yellow-400"];
const shapes = ["rounded-full", "rounded-lg", "rotate-12", "skew-y-6"];

// ====== 型別 ======
type ShapeBase = {
  id: number;
  size: number;
  top: string;
  left: string;
  opacity: number;
  color: string;
  shape: string;
  speed: number;
};

// ====== 背景 Shape 元件 ======
function ParallaxShape({
  size,
  top,
  left,
  opacity,
  color,
  shape,
  speed,
  offsetX,
  offsetY,
  scrollY,
}: ShapeBase & {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  scrollY: MotionValue<number>;
}) {
  const parallaxY = useTransform(scrollY, [0, 500], [0, speed]);

  return (
    <motion.div
      className={`absolute ${color} ${shape} -z-10`}
      style={{
        width: size,
        height: size,
        top,
        left,
        opacity,
        x: offsetX,
        y: offsetY,
        translateY: parallaxY,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
  );
}

// ====== 固定亂數產生器 ======
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ====== 粒子配置 (星星+連線+閃爍) ======
const particlesOptions: RecursivePartial<IOptions> = {
  background: { color: { value: "transparent" } },
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: { enable: false }, // ✅ 限制在 Hero
  interactivity: {
    detectsOn: "window" as InteractivityDetect,
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: { enable: true, delay: 0.5 },
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      outModes: { default: "out" },
    },
    number: {
      value: 80,
      density: { enable: true, width: 800, height: 800 }, // ✅ 修正
    },
    opacity: { value: 0.2 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
    // ✨ Twinkle 設定
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 0.2,
      },
      lines: {
        enable: true,
        frequency: 0.01,
        opacity: 0.1,
      },
    },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const offsetX = useTransform(mouseX, [0, 1], [-30, 30]);
  const offsetY = useTransform(mouseY, [0, 1], [-30, 30]);

  const heroRef = useRef<HTMLDivElement>(null);

  // 滑鼠視差
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 初始化 tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  // 滾動視差
  const { scrollY } = useScroll();

  // 背景幾何圖形
  const shapesConfig: ShapeBase[] = useMemo(() => {
    const rand = mulberry32(700707);
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.floor(rand() * 60) + 40,
      top: `${rand() * 80}%`,
      left: `${rand() * 80}%`,
      opacity: rand() * 0.1 + 0.1,
      color: colors[Math.floor(rand() * colors.length)],
      shape: shapes[Math.floor(rand() * shapes.length)],
      speed: rand() * 200 - 100,
    }));
  }, []);

  return (
    <motion.section
      ref={heroRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center text-center py-20 text-white px-4 overflow-hidden"
    >
      {/* 漸層背景 */}
      <div className="absolute inset-0 -z-30 bg-animated-gradient"></div>

      {/* 粒子效果 (星星+連線+閃爍) */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-20 opacity-80"
        style={{ width: "100%", height: "100%" }}
        options={particlesOptions}
      />

      {/* 幾何背景 */}
      {shapesConfig.map((s) => (
        <ParallaxShape
          key={s.id}
          {...s}
          offsetX={offsetX}
          offsetY={offsetY}
          scrollY={scrollY}
        />
      ))}

      {/* Hero 文字 */}
      <motion.h1
        variants={headingVariants}
        className="text-4xl md:text-6xl font-bold mb-6 md:mb-12 drop-shadow drop-shadow-black/50"
      >
        Hi, I’m <span className="text-teal-300">James</span>
      </motion.h1>

      <motion.p
        variants={subheadingVariants}
        className="text-base md:text-xl text-gray-200 max-w-4xl mb-2 drop-shadow drop-shadow-black/50"
      >
        A Web Designer & Frontend Developer passionate about building beautiful,
        fast, and user-friendly websites.
      </motion.p>

      <motion.p
        variants={taglineVariants}
        className="text-xl md:text-lg text-gray-300 max-w-2xl drop-shadow drop-shadow-black/50"
      >
        網頁設計師 & 前端開發者，<span className="inline md:hidden"><br /></span>專注於設計美觀、快速且友善的網站。
      </motion.p>

      {/* 按鈕 */}
      <motion.div
        variants={buttonGroupVariants}
        className="mt-6 md:mt-12 flex space-x-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg drop-shadow-xl drop-shadow-black/50 hover:bg-teal-600 hover:drop-shadow-lg hover:translate-y-1 transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg drop-shadow-xl drop-shadow-black/50 hover:bg-gray-300 hover:drop-shadow-lg hover:translate-y-1 transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
