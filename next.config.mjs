/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["backend.daca.vn", "th.bing.com","res.cloudinary.com"], // 👈 thêm domain này vào đây
  },
};

export default nextConfig;
