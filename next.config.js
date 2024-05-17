const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },
  sassOptions: {
    prependData: `@import "./src/styles/_mantine.scss";`,
  },
};

module.exports = nextConfig;
