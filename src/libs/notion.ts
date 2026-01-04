import { blogDataSourceId, notionToken } from "#/configs/notion"

import { Client } from "@notionhq/client"

// Init Client (Access to notion page)
const notion = new Client({
    auth: notionToken,
})

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
