import type { NextConfig } from "next";

const isGithub = process.env.DEPLOY_ENV === "github";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // GitHub Pages 不支援 Next Image Optimizer
  trailingSlash: true,           // 確保生成 /about/index.html 而不是 /about
  basePath: isGithub ? "/my-portfolio" : "",
  assetPrefix: isGithub ? "/my-portfolio/" : "",
};

export default nextConfig;
