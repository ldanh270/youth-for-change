import { blogDataSourceId, notionToken } from "#/configs/notion"

import { Client, PageObjectResponse, PartialPageObjectResponse, isFullPage } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

// Init Client (Access to notion page)
const notion = new Client({
    auth: notionToken,
})

const notionToMD = new NotionToMarkdown({ notionClient: notion })

/**
 * Get latest blogs
 * @param limit Page amount to get
 * @param cursor Cursor to support pagination
 * @returns Latest blog list
 */
export const getLatestBlogs = async ({
    limit = 5,
    cursor,
}: {
    limit?: number
    cursor?: string
}): Promise<(PartialPageObjectResponse | PageObjectResponse)[]> => {
    // Get list object
    const blogs = await notion.dataSources.query({
        // Data source id
        data_source_id: blogDataSourceId,
        // Limit blogs to query
        page_size: limit,
        // Cursor
        start_cursor: cursor || undefined,
        // Filter data
        filter: {
            property: "Status", // Filter column name
            status: {
                equals: "Published", // Value to filter
            },
        },
        // Sort by descending
        sorts: [
            {
                property: "PublishedDate", // Sort by property publication date
                direction: "descending", // Sort by decending
            },
        ],
    })

    // Return blogs in list results
    return blogs.results.filter(isFullPage)
}

/**
 * Get blog details by slug
 * @param slug blog's url on broswer
 * @returns { metadata, markdown }
 * - Blog metadata
 * - Markdown string content
 */
export const getBlogBySlug = async ({ slug }: { slug: string }) => {
    // Find blog with input slug
    const blog = await notion.dataSources.query({
        // Data source id
        data_source_id: blogDataSourceId,
        // Filter data
        filter: {
            property: "Slug",
            // Use rich_text instead of string (plan_text) to handle text annotations
            rich_text: {
                equals: slug,
            },
        },
    })

    const page = blog.results[0]

    if (!page || !isFullPage(page)) {
        return null // Skip if not found or partial object
    }

    // Get metadata to display in blog header
    const metadata = {
        // Id
        id: page.id,
        // Title
        title:
            page.properties?.Title?.type === "title"
                ? page.properties.Title.title[0]?.plain_text
                : null,
        // Tag
        tag: page.properties?.Tag.type === "select" ? page.properties.Tag.select?.name : "General",
        // Thumbnail
        coverUrl: page.cover?.type === "external" ? page.cover?.external?.url : "",
        // Description
        description:
            page.properties?.Description.type === "rich_text"
                ? page.properties.Description.rich_text[0]?.plain_text
                : "",
        // Created time
        created_time: page.created_time,
        // Last edited time
        last_edited_time: page.last_edited_time,
    }

    // Convert file content from Page (Blocks) to Markdown
    const mdblocks = await notionToMD.pageToMarkdown(page.id)
    const mdString = notionToMD.toMarkdownString(mdblocks)

    return {
        metadata,
        markdown: mdString.parent || "", // Markdown string
    }
}
