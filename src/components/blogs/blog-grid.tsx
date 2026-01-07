import {
    PageObjectResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"

import BlogCard from "./blog-card"

interface BlogGridProps {
    blogs: (PartialPageObjectResponse | PageObjectResponse)[]
}

export default function BlogGrid({ blogs }: BlogGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
                // Type guard to ensure it's a PageObjectResponse
                if ("properties" in blog) {
                    return <BlogCard key={blog.id} blog={blog as PageObjectResponse} />
                }
                return null
            })}
        </div>
    )
}
