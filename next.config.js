/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverAction: true,
      },
     env: {
        BASE_URL: process.env.BASE_URL
     },
     generateBuildId: async () => {
      // You can, for example, get the latest git commit hash here
      return '3QNwYcaVhdHX'
    },
}

module.exports = nextConfig
