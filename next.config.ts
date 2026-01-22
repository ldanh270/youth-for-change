import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
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

// Config for next-intl
const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
