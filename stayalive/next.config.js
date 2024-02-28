/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains: ['media.discordapp.net', 'www.freepnglogos.com'],
    },
    async rewrites() {
      return [
        {
          source: '/auth/register',
          destination: 'http://api.stayalive.fr:3000/auth/register',
        },
        {
          source: '/auth/login',
          destination: 'http://api.stayalive.fr:3000/auth/login',
        },
      ];
    },
  };
