import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // <--- permitir cloudinary
  },
};

export default nextConfig;
