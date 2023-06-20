import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
  }
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: true,
    // mdxRs: true,
    swcMinify: true  
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};


export default withMDX(nextConfig)
