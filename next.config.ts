import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProd
    ? {
        basePath: "/my-portfolio",
        assetPrefix: "/my-portfolio/",
        publicRuntimeConfig: { basePath: "/my-portfolio" },
      }
    : {
        publicRuntimeConfig: { basePath: "" },
      }),
};

export default nextConfig;
