import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/portfolio-nextjs-app/" : undefined,
  basePath: isProd ? "/portfolio-nextjs-app" : undefined,
  output: "export",
};

export default nextConfig;
