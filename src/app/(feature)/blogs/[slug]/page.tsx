import { getCachedLatestPosts } from "#/libs/cache"
import { convertMarkdownToHTML } from "#/libs/markdown-converter"
import { getBlogBySlug } from "#/libs/notion"
import { mapBlogToCard } from "#/libs/notion-helper"
import { Blog } from "#/types/blog"

import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

interface BlogDetailsPageProps {
    params: Promise<{ slug: string }>
}

/**
 * Build static slug for SSG
 * @returns Slug to prebuild
 */
export async function generateStaticParams() {
    const rawPosts = await getCachedLatestPosts({ limit: 5 })

    const blogs = rawPosts.map((post) => mapBlogToCard(post as Blog))

    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

/**
 * Generate metadata to support SEO
 * @param param Promise built params
 * @returns Metadata
 * - Title
 * - Description
 * => To support SEO
 */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params

    const blog = await getBlogBySlug({ slug })
    return {
        title: blog?.metadata.title,
        description: blog?.metadata.description,
    }
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
    const { slug } = await params
    const blog = await getBlogBySlug({ slug })

    if (!blog) {
        notFound()
    }

    const { metadata, markdown } = blog

    return (
        <div className="from-background via-card to-background min-h-screen bg-linear-to-br">
            {/* Hero Section */}
            <div className="bg-muted relative h-[60vh] w-full overflow-hidden">
                {metadata.coverUrl && (
                    <Image
                        src={metadata.coverUrl}
                        alt={metadata.title || "Blog cover"}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="from-background via-background/50 absolute inset-0 bg-linear-to-t to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto -mt-32 px-4">
                <article className="mx-auto max-w-4xl">
                    {/* Header Card */}
                    <div className="bg-card border-border mb-8 rounded-2xl border p-8 shadow-lg md:p-12">
                        {/* Tags */}
                        {metadata.tag && (
                            <div className="mb-6 flex flex-wrap gap-2">
                                <span
                                    key={metadata.tag}
                                    className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium"
                                >
                                    {metadata.tag}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-foreground font-title mb-6 text-4xl font-bold md:text-5xl">
                            {metadata.title}
                        </h1>

                        {/* Description */}
                        {metadata.description && (
                            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
                                {metadata.description}
                            </p>
                        )}

                        {/* Meta Info */}
                        <div className="text-muted-foreground border-border flex flex-wrap gap-6 border-t pt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <time dateTime={metadata.created_time}>
                                    {new Date(metadata.created_time).toLocaleDateString("vi-VN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Cập nhật:{" "}
                                    {new Date(metadata.last_edited_time).toLocaleDateString(
                                        "vi-VN",
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Markdown Content */}
                    <div
                        className="bg-card border-border markdown-content rounded-2xl border p-8 shadow-lg md:p-12"
                        dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(markdown) }}
                    />
                </article>
            </div>
        </div>
    )
}
