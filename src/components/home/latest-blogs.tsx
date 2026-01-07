import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/ui/card"
import { getCachedLatestPosts } from "#/libs/cache"
import { mapBlogToCard } from "#/libs/notion-helper"
import { Blog } from "#/types/blog"

import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function LatestBlogs() {
    const rawPosts = await getCachedLatestPosts({ limit: 5 })

    const blogs = rawPosts.map((post) => mapBlogToCard(post as Blog))
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
                    {blogs.map((blog) => (
                        <Link href={blog.slug} key={blog.id}>
                            <Card
                                key={blog.id}
                                className="overflow-hidden transition-shadow hover:shadow-lg"
                            >
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={blog.cover}
                                        alt={blog.title}
                                        width={800}
                                        height={400}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="mb-2 flex items-center justify-between">
                                        <Badge
                                            variant="secondary"
                                            className="bg-success/10 text-success"
                                        >
                                            Published
                                        </Badge>
                                        <div className="flex gap-1">
                                            {blog.tags.map((tag) => (
                                                <Badge
                                                    key={tag.name}
                                                    variant="outline"
                                                    className="text-xs"
                                                >
                                                    SDG {tag.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                                    <CardDescription>{blog.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-muted-foreground flex items-center text-sm">
                                        <Calendar className="mr-1 h-3 w-3" />
                                        <span>
                                            {new Date(blog.publishedDate).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                },
                                            )}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
