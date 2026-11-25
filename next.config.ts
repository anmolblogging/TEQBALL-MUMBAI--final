import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as they are, without Vercel resizing. The free plan's
    // monthly image allowance (shared by all projects) ran out, and resized
    // images failed with 402. Images in /public are pre-compressed instead.
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
