import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    blog: PageObjectResponse
}

export default function BlogCard({ blog }: BlogCardProps) {
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

    const coverUrl =
        blog.cover?.type === "external" ? blog.cover?.external?.url : "/placeholder-blog.jpg"

    const tags =
        blog.properties?.Tags?.type === "multi_select" ? blog.properties.Tags.multi_select : []

    const publishedDate =
        blog.properties?.PublishedDate?.type === "date"
            ? blog.properties.PublishedDate.date?.start
            : blog.created_time

    return (
        <Link
            href={`/blogs/${slug}`}
            className="group border-border bg-card hover:border-primary/50 block h-full overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg"
        >
            {/* Image */}
            <div className="bg-muted relative h-48 w-full overflow-hidden">
                <Image
                    src={coverUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag.id}
                                className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-foreground group-hover:text-primary line-clamp-2 text-xl font-bold transition-colors">
                    {title}
                </h3>

                {/* Description */}
                {description && (
                    <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Date */}
                <div className="text-muted-foreground border-border flex items-center gap-2 border-t pt-2 text-xs">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    <time dateTime={publishedDate}>
                        {new Date(publishedDate).toLocaleDateString("vi-VN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </div>
            </div>
        </Link>
    )
}
