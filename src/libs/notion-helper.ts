// src/utils/notion-helper.ts
import { Blog } from "#/types/blog"

/**
 * Mapping blog to rendering card
 * @param page Response raw blog
 * @returns Mapped blog to render
 */
export const mapBlogToCard = (page: Blog) => {
    return {
        // Id
        id: page.id,

        // Title
        title: page.properties.Title.title[0]?.plain_text || "Untitled",

        // Slug
        slug: page.properties.Slug.rich_text[0]?.plain_text || "",

        // Tag
        tag: page?.properties.Tag.select?.name || "",

        // Published date
        publishedDate: page.properties.PublishedDate.date?.start || page.created_time,

        // Description
        description: page.properties.Description.rich_text.map((t) => t.plain_text).join(""),

        // Cover image
        cover:
            page.cover?.type === "external"
                ? page.cover.external.url
                : page.cover?.type === "file"
                  ? page.cover.file.url
                  : "/placeholder.png",
    }
}
