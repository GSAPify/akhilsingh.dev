import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to out/, served as plain files by Cloudflare Pages.
  output: "export",
  // /about -> /about/index.html so clean URLs work on any static host.
  trailingSlash: true,
  // The default next/image loader needs a server.
  images: { unoptimized: true },
};

export default nextConfig;
