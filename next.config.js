/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.trulia-cdn.com',
                port: '',
                pathname: '/pictures/**',
                search: '',
            },
        ],
    },
};

module.exports = nextConfig;
