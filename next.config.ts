import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/pfirouzabadi",
  assetPrefix: "/pfirouzabadi",
};

export default nextConfig;
