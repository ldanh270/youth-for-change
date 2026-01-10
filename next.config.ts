import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,

    // Image configuration
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "www.notion.so",
            },
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: "attachment",
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
}

export default nextConfig
