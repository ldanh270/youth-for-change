import { BlogRendererWrapper } from "#/components/blog/blog-renderer-wrapper"
import { blogService } from "#/lib/blog-service"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params
    const post = await blogService.getBySlug(slug)

    if (!post) {
        notFound()
    }

    const formattedDate = new Date(post.createdAt).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="mx-auto max-w-4xl px-4 pt-8">
                <Link
                    href="/blog"
                    className="mb-4 inline-block text-sm text-blue-600 hover:underline"
                >
                    ← Quay lại danh sách
                </Link>

                {post.coverImage && (
                    <div className="mb-8 aspect-video overflow-hidden rounded-xl">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{post.title}</h1>

                <div className="mb-8 flex items-center gap-4 text-gray-600">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time>{formattedDate}</time>
                </div>

                {post.tags.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {/* Content */}
            <article className="mx-auto max-w-4xl px-4 pb-16">
                <BlogRendererWrapper content={post.content} />
            </article>
        </div>
    )
}
