import BlogHeader from "#/components/blogs/blog-header"
import BlogList from "#/components/blogs/blog-list"
import { getCachedLatestPosts } from "#/libs/cache"

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ tag?: string; page?: string }>
}) {
    const { tag } = await searchParams

    const { blogs, nextCursor } = await getCachedLatestPosts({ limit: 20, tag })

    return (
        <div className="h-full">
            <div className="mx-auto flex h-full flex-col items-center justify-between">
                {/* Header */}
                <BlogHeader className="mt-16" tag={tag} />

                {/* Blog list */}
                <BlogList
                    // Add "key" attribute to force re-render component
                    key={tag || "all"}
                    initialBlogs={blogs}
                    initialCursor={nextCursor ?? ""}
                    className="mx-20 self-stretch"
                    tag={tag}
                />
            </div>
        </div>
    )
}
