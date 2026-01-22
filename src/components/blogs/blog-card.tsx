import { Badge } from "#/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "#/components/ui/card"
import { SDGs } from "#/configs/sdgs"
import { timeFormatter } from "#/libs/utils"

import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function BlogCard({ blog }: { blog: PageObjectResponse }) {
    const t = useTranslations("Core")

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

    const lastEditedTime = blog.last_edited_time

    return (
        <Link href={`/blogs/${slug}`} className="group block h-full w-full">
            <Card className="border-border/50 bg-card hover:shadow-primary/5 dark:hover:shadow-primary/10 flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Cover Section */}
                <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                        src={cover}
                        alt={title}
                        fill
                        className="bg-cover object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay Gradient at image button*/}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* SDG Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <Badge
                            className={`border-0 text-white backdrop-blur-md bg-sdg-${tag} shadow-sm`}
                        >
                            SDG {tag}
                        </Badge>
                    </div>
                </div>

                {/* Content Section */}
                <CardHeader className="space-y-2 p-5 pb-2">
                    {/* SDG tag name */}
                    <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                        {SDGs[Number(tag) - 1]?.title || "General"}
                    </span>

                    {/* Main title */}
                    <CardTitle className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-bold transition-colors">
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="grow p-5 py-2">
                    {/* Description */}
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                        {description}
                    </p>
                </CardContent>

                {/* Footer Section: Meta info & CTA */}
                <CardFooter className="bg-muted/5 text-muted-foreground flex items-center justify-between border-t p-4 py-3 text-xs">
                    {/* Last updated */}
                    {lastEditedTime && (
                        <div className="flex items-center gap-2">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>
                                {t("lastUpdated")}: {timeFormatter({ time: lastEditedTime })}
                            </span>
                        </div>
                    )}

                    <div className="text-primary ml-auto flex items-center justify-end gap-1 font-medium opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        {t("readMore")}
                        <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
