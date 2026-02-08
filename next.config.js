/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.ANY_API_KEY,
    ANY_API_KEY: process.env.ANY_API_KEY,
  },
}

module.exports = nextConfig