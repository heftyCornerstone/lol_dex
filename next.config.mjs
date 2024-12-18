/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/**',
            },
        ],
    },
    reactStrictMode: false,
};

export default nextConfig;
