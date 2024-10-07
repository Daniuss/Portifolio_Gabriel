/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.w3schools.com",
        pathname: "/w3images/**",
      },
    ],
  },
};

export default nextConfig;
