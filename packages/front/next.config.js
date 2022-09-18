// eslint-disable-next-line @typescript-eslint/no-var-requires
const transpile = require('next-transpile-modules');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withTM = transpile(['@wiscro/common']); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
