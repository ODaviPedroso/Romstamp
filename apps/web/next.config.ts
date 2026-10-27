import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.API_BASE_URL ?? "http://localhost:5191";
    return [{ source: "/api/v1/:path*", destination: `${apiUrl}/api/v1/:path*` }];
  },
};
export default nextConfig;
