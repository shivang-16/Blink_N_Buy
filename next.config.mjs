/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    JWT_SECRET:"FLKSJDFLKASDJKLFJASDIJ",
    CLOUD_NAME: "ddszevvis",
    CLOUDINARY_API_KEY:"789795588463916",
    CLOUDINARY_API_SECRET: "vMa4oBKEt-dPkuqgDpQ8srfuDY8",
  },
};

export default nextConfig;
