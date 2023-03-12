/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  i18n,
};

module.exports = nextConfig;
