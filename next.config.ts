import type { NextConfig } from "next";

function clean(str: string | undefined): string {
  return (str || "").trim().replace(/\s+/g, "");
}

const isProd = process.env.NODE_ENV === "production";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = isProd ? clean(rawBasePath) : "";

console.log("🚀 basePath:", JSON.stringify(basePath));
console.log("🚀 assetPrefix:", JSON.stringify(basePath ? `${basePath}/` : undefined));

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;