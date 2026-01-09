import BlogHeader from "#/components/blogs/blog-header"
import BlogList from "#/components/blogs/blog-list"
import { PaginationBar } from "#/components/blogs/pagination"
import { getCachedLatestPosts } from "#/libs/cache"

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { tag } = await searchParams

    // TODO: Config to pagination
    // const page = Number(searchParams.page) || 1

    const blogs = await getCachedLatestPosts({ limit: 20, tag: tag?.toString() })

    return (
        <div className="h-screen">
            <div className="mx-auto flex h-full flex-col items-center justify-between">
                {/* Header */}
                <BlogHeader className="mt-16" tag={tag?.toString()} />

                {/* Blog list */}
                <BlogList blogs={blogs} className="mx-20 self-stretch" />

                {/* Pagination */}
                <div className="mt-auto">
                    <PaginationBar />
                </div>
            </div>
        </div>
    )
}
