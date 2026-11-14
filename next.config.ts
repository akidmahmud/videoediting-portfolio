import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // static site for Cloudflare Pages
};

export default nextConfig;
