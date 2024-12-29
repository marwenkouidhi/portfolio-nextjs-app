import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "/portfolio-nextjs-app/",
  basePath: "/portfolio-nextjs-app",
  output: "export",
};

export default nextConfig;
