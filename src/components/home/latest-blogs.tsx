import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card"
import { SDGs } from "#/configs/constants/sdgs"
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
                        <Link href={blog.slug} key={blog.id} className="group block h-full">
                            <Card className="border-border/50 bg-card hover:shadow-primary/5 dark:hover:shadow-primary/10 flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                {/* Cover Section */}
                                <div className="relative aspect-16/10 w-full overflow-hidden">
                                    <Image
                                        src={blog.cover}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay Gradient at image button*/}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* SDG Badge */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <Badge
                                            className={`border-0 text-white backdrop-blur-md bg-sdg-${blog.tag} shadow-sm`}
                                        >
                                            SDG {blog.tag}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <CardHeader className="space-y-2 p-5 pb-2">
                                    {/* SDG Title */}
                                    <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                                        {SDGs[Number(blog.tag) - 1]?.title || "General"}
                                    </span>

                                    {/* Main Title */}
                                    <CardTitle className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-bold transition-colors">
                                        {blog.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="grow p-5 py-2">
                                    {/* Description */}
                                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                                        {blog.description}
                                    </p>
                                </CardContent>

                                {/* Footer Section: Meta info & CTA */}
                                <CardFooter className="bg-muted/5 text-muted-foreground flex items-center justify-between border-t p-4 py-3 text-xs">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
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
                                    </div>

                                    <div className="text-primary flex items-center gap-1 font-medium opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                        Read more <ArrowRight className="h-3.5 w-3.5" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
