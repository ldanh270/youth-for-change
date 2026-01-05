import { blogDataSourceId, notionToken } from "#/configs/notion"

import { Client, isFullPage } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

// Init Client (Access to notion page)
const notion = new Client({
    auth: notionToken,
})

const notionToMD = new NotionToMarkdown({ notionClient: notion })

/**
 * Get published posts
 * @returns published post list
 */
export const getPublishedPosts = async () => {
    // Get list object
    const posts = await notion.dataSources.query({
        data_source_id: blogDataSourceId,
        filter: {
            property: "Status", // Filter column name
            status: {
                equals: "Published", // Value to filter
            },
        },
        sorts: [
            {
                property: "Publication Date", // Sort by property publication date
                direction: "descending", // Sort by decending
            },
        ],
    })

    // Return posts in list results
    return posts.results
}

/**
 * Get post details by slug
 * @param slug post's url on broswer
 * @returns { metadata, markdown }
 * - Post metadata
 * - Markdown string content
 */
export const getPostBySlug = async (slug: string) => {
    // Find post with input slug
    const post = await notion.dataSources.query({
        data_source_id: blogDataSourceId,
        filter: {
            property: "Slug",
            // Use rich_text instead of string (plan_text) to handle text annotations
            rich_text: {
                equals: slug,
            },
        },
    })

    const page = post.results[0]

    if (!page || !isFullPage(page)) {
        return null // Skip if not found or partial object
    }

    // Get metadata to display in post header
    const metadata = {
        // Post id
        id: page.id,
        // Title
        title:
            page.properties?.Title?.type === "title"
                ? page.properties.Title.title[0]?.plain_text
                : null,
        // Tags
        tags:
            page.properties?.Tags.type === "multi_select" ? page.properties.Tags.multi_select : [],
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
        markdown: mdString.parent, // Markdown string
    }
}
