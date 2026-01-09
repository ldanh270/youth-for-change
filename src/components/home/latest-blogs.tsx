import BlogCard from "#/components/blogs/blog-card"
import { Button } from "#/components/ui/button"
import { getCachedLatestPosts } from "#/libs/cache"

import { isFullPage } from "@notionhq/client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export async function LatestBlogs() {
    const blogs = await getCachedLatestPosts({ limit: 5 })

    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                            Latest Blogs
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Stay updated with our latest initiatives and announcements
                        </p>
                    </div>
                    <Button variant="outline" asChild className="mt-4 md:mt-0">
                        <Link href="/blogs">
                            View All Blogs <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.blogs.filter(isFullPage).map((blog) => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </section>
    )
}
