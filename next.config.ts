import type { NextConfig } from "next";
import nextMDX from "@next/mdx"


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
