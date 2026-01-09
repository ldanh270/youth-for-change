import BlogCard from "#/components/blogs/blog-card"

import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client"

export default function BlogList({
    blogs,
    className,
}: {
    blogs: (PageObjectResponse | PartialPageObjectResponse)[]
    className?: string
}) {
    return (
        <div className={`${className}`}>
            {blogs.length > 0 ? (
                <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => {
                        if ("properties" in blog) {
                            return <BlogCard key={blog.id} blog={blog as PageObjectResponse} />
                        }
                        return null
                    })}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <p className="text-muted-foreground text-lg">
                        No articles have been published yet.
                    </p>
                </div>
            )}
        </div>
    )
}
