"use client"
import BlogCard from "#/components/blogs/blog-card"
import { Button } from "#/components/ui/button"
import { getCachedLatestPosts } from "#/libs/cache"

import { useState } from "react"

import { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client"

export default function BlogList({
    initialBlogs,
    className,
    initialCursor,
    tag,
}: {
    initialBlogs: (PageObjectResponse | PartialPageObjectResponse)[]
    className?: string
    initialCursor: string
    tag?: string
}) {
    const [blogs, setBlogs] = useState(initialBlogs)
    const [cursor, setCursor] = useState(initialCursor)
    const [loading, setLoading] = useState(false)

    const handleLoadMore = async () => {
        if (!cursor) return
        setLoading(true)

        const newData = await getCachedLatestPosts({ limit: 20, cursor, tag })

        setBlogs((prev) => [...prev, ...newData.blogs])

        setCursor(newData.nextCursor ?? "")
        setLoading(false)
    }

    return (
        <div className={`${className} pb-10`}>
            {blogs.length > 0 ? (
                <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                        No blogs have been published yet.
                    </p>
                </div>
            )}
            {/* Load more */}
            {cursor && (
                <div className="m-10 mt-auto">
                    <Button
                        variant={"outline"}
                        className="cursor-pointer p-5"
                        onClick={handleLoadMore}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Read more"}
                    </Button>
                </div>
            )}
        </div>
    )
}
