/** @type {import('next').NextConfig} */
const nextConfig = {
  // ignoreServerSideAttributes: true,
  images: {
    domains: ["t.resfu.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t.resfu.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "cdn.resfu.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
