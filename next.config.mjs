import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: "export",
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
})(nextConfig);
