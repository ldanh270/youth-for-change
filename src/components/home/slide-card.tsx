import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { SDGs } from "#/configs/sdgs"

import { PageObjectResponse } from "@notionhq/client"
import Link from "next/link"

export default function SlideCard({
    blog,
    className,
}: {
    blog: PageObjectResponse
    className: string
}) {
    const title =
        blog.properties?.Title?.type === "title"
            ? blog.properties.Title.title[0]?.plain_text
            : "Untitled"

    const description =
        blog.properties?.Description?.type === "rich_text"
            ? blog.properties.Description.rich_text[0]?.plain_text
            : ""

    const slug =
        blog.properties?.Slug?.type === "rich_text"
            ? blog.properties.Slug.rich_text[0]?.plain_text
            : ""

    const cover = blog.cover?.type === "external" ? blog.cover?.external?.url : "/placeholder.png"

    const tag =
        blog.properties?.Tag.type === "select" ? blog.properties.Tag.select?.name : "General"

    return (
        <div
            key={blog.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${className}`}
            style={{ backgroundImage: `url(${cover})` }}
        >
            {/* Content */}
            <div className="relative container mx-auto flex h-full items-center px-4">
                <div className="max-w-2xl">
                    <div className="flex flex-row items-center justify-start gap-5">
                        {/* SDG Badge */}
                        <Badge
                            className={`border-0 text-white backdrop-blur-md bg-sdg-${tag} w-fit shadow-sm`}
                        >
                            SDG {tag}
                        </Badge>

                        {/* SDG tag */}
                        <span className="text-xs font-semibold tracking-wider text-white uppercase">
                            {SDGs[Number(tag) - 1]?.title || "General"}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-title mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="mb-8 text-lg text-white md:text-xl">{description}</p>

                    {/* Read more button */}
                    <Button asChild size="lg" className="px-8 text-lg">
                        <Link href={`/blogs/${slug}`}>Read more</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
