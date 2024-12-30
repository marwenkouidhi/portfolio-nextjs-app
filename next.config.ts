import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/portfolio-nextjs-app/" : "",
  basePath: isProd ? "/portfolio-nextjs-app" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
