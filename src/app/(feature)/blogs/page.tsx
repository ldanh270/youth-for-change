import BlogGrid from "#/components/blogs/blog-grid"
import BlogHeader from "#/components/blogs/blog-header"
import { getLatestBlogs } from "#/libs/notion"

export default async function BlogsPage() {
    const blogs = await getLatestBlogs({ limit: 12 })

    return (
        <div className="from-background via-card to-background min-h-screen bg-linear-to-br">
            <div className="container mx-auto px-4 py-16">
                {/* Header */}
                <BlogHeader />

                {/* Blog Grid */}
                {blogs.length > 0 ? (
                    <BlogGrid blogs={blogs} />
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-muted-foreground text-lg">
                            Chưa có bài viết nào được xuất bản.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
