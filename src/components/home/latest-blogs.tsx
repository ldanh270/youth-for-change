import BlogCard from "#/components/blogs/blog-card"
import { Button } from "#/components/ui/button"

import { PageObjectResponse, PartialPageObjectResponse, isFullPage } from "@notionhq/client"
import { ArrowRight } from "lucide-react"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

export async function LatestBlogs({
    blogs,
}: {
    blogs: (PageObjectResponse | PartialPageObjectResponse)[]
}) {
    const t = await getTranslations("HomePage.LatestBlogs")

    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                            {t("Title")}
                        </h2>
                        <p className="text-muted-foreground max-w-xl">{t("Description")}</p>
                    </div>
                    <Button variant="outline" asChild className="mt-4 hidden md:mt-0 md:flex">
                        <Link href="/blogs">
                            {t("ViewAll")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* Page list */}
                <div className="grid gap-10 md:grid-cols-1 md:px-10 lg:grid-cols-3 lg:gap-6">
                    {blogs
                        .filter(isFullPage)
                        .slice(0, 3)
                        .map((blog) => (
                            <BlogCard blog={blog} key={blog.id} />
                        ))}
                </div>
                <Button variant="outline" asChild className="mt-4 w-full md:mt-0 md:hidden">
                    <Link href="/blogs">
                        {t("ViewAll")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
