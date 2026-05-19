import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.schoolrave.net",
        pathname: "/cdn-cgi/image/**",
      },
    ],
  },
};

export default nextConfig;
