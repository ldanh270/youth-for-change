// lib/posts.ts
import { getLatestBlogs } from "#/libs/notion"

import { unstable_cache } from "next/cache"

/**
 * Using unstable_cache to add caching data
 * - Default fetch: Having NextJS default caching
 * - Internal DB call: Not supporting caching
 * => Using unstable_cache to caching by response data
 */
export const getCachedLatestPosts = unstable_cache(
    async ({ limit = 5 }: { limit?: number }) => {
        return await getLatestBlogs({ limit })
    },
    ["latest-posts-key"], // Identify key to cache
    {
        revalidate: 60, // Revalidate each 60 seconds (ISR)
        tags: ["posts"], // Tag to delete cache manually (On-demand Revalidation)
    },
)
