"use client"

import dynamic from "next/dynamic"

const BlogRenderer = dynamic(
    () => import("#/components/blog/blog-renderer").then((mod) => mod.BlogRenderer),
    { ssr: false },
)

interface BlogRendererWrapperProps {
    content: string
}

export function BlogRendererWrapper({ content }: BlogRendererWrapperProps) {
    return <BlogRenderer content={content} />
}
