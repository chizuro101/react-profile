import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to export static HTML files
  output: 'export', 
  
  // 2. Set the base path to match your GitHub repository name
  basePath: '/react-profile', 
  
  // 3. Disable image optimization because GitHub Pages is a static host
  images: {
    unoptimized: true,
  },
  
  // 4. (Optional) Helpful for routing issues on static hosts
  trailingSlash: true,
};

export default nextConfig;