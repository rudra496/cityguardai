/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/cityguardai",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
