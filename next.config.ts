import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /cenik nikoli ni imel lastne strani; cenik je razdelek na domači strani.
      { source: "/cenik", destination: "/#cenik", permanent: true },
    ];
  },
};

export default nextConfig;
