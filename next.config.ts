import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /cenik nima lastne strani; cenik je razdelek na domači strani.
      { source: "/cenik", destination: "/#cenik", permanent: true },
    ];
  },
};

export default nextConfig;
