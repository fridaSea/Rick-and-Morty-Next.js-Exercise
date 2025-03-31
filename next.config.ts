import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        // port: "", - we don`t need this
        // pathname: "/account123/**",
        // search: "",
      },
      {
        protocol: "http",
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

export default nextConfig;
