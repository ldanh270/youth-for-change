import { Badge } from "#/components/ui/badge"
import { getCachedLatestPosts } from "#/libs/cache"
import { convertMarkdownToHTML } from "#/libs/markdown-converter"
import { getBlogBySlug } from "#/libs/notion"
import { mapBlogToCard } from "#/libs/notion-helper"
import { timeFormatter } from "#/libs/utils"
import { Blog } from "#/types/blog"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogDetailsPageProps {
    params: Promise<{ slug: string }>
}

/**
 * Build static slug for SSG
 */
export async function generateStaticParams() {
    const rawPosts = await getCachedLatestPosts({ limit: 5 })
    const blogs = rawPosts.blogs.map((post) => mapBlogToCard(post as Blog))

    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

/**
 * Generate metadata to support SEO
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

/**
 * Blog details page
 */
export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
    const { slug } = await params
    const blog = await getBlogBySlug({ slug })

    if (!blog) {
        notFound()
    }

    const { metadata, markdown } = blog

    return (
        <div className="bg-background min-h-screen">
            {/* Cover image */}
            {metadata.coverUrl && (
                <div className="relative h-96 w-full overflow-hidden border-b">
                    <Image
                        src={metadata.coverUrl}
                        alt={metadata.title || "Blog cover"}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Breadcrumb */}
            <div className="bg-muted/30 border-b">
                <div className="container mx-auto max-w-7xl px-4 py-3">
                    <nav className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Link href="/" className="hover:text-foreground transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/blogs" className="hover:text-foreground transition-colors">
                            Blogs
                        </Link>
                        <span>/</span>
                        <span className="text-foreground line-clamp-1 font-medium">
                            {metadata.title}
                        </span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="flex gap-8">
                    {/* Left Sidebar - Table of Contents */}
                    <aside className="hidden w-64 shrink-0 lg:block">
                        <div className="sticky top-8">
                            <h2 className="text-foreground mb-4 text-sm font-semibold">
                                In this post
                            </h2>
                            <nav className="space-y-2 text-sm">
                                <a
                                    href="#overview"
                                    className="text-muted-foreground hover:text-foreground block py-1 transition-colors"
                                >
                                    Overview
                                </a>
                                <a
                                    href="#content"
                                    className="text-muted-foreground hover:text-foreground block py-1 transition-colors"
                                >
                                    Main content
                                </a>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Article */}
                    <article className="min-w-0 flex-1">
                        {/* Title Section */}
                        <header className="mb-8 border-b pb-6">
                            <div className="flex items-center py-5">
                                {metadata.tag && (
                                    <Link href={`/blogs?tag=${metadata.tag}`}>
                                        <Badge
                                            className={`border-0 text-white backdrop-blur-md bg-sdg-${metadata.tag} cursor-pointer shadow-sm transition-opacity hover:opacity-80`}
                                        >
                                            SDG {metadata.tag}
                                        </Badge>
                                    </Link>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-foreground mb-4 text-4xl leading-tight font-bold md:text-5xl">
                                {metadata.title}
                            </h1>

                            {/* Description */}
                            {metadata.description && (
                                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                                    {metadata.description}
                                </p>
                            )}

                            {/* Meta */}
                            <div className="text-muted-foreground flex flex-wrap items-center gap-6 text-sm">
                                {/* Last updated */}
                                {metadata.last_edited_time && (
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="h-4 w-4"
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
                                            Last updated:{" "}
                                            {timeFormatter({ time: metadata.last_edited_time })}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </header>

                        {/* Article Content */}
                        <div
                            id="content"
                            className="prose prose-slate prose-headings:font-semibold prose-headings:text-foreground prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8 prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-6 prose-h2:pb-2 prose-h2:border-b prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-4 prose-p:text-muted-foreground prose-p:leading-7 prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-ul:my-4 prose-li:my-1 prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-img:rounded-lg prose-img:border prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic max-w-none"
                            dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(markdown) }}
                        />
                    </article>
                </div>
            </div>
        </div>
    )
}
