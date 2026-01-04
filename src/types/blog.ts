export interface BlogPost {
    id?: string
    icon: string
    slug: string
    content: string // JSON string from BlockNote
    excerpt: string
    coverImage?: string
    author: string
    tags: string[]
    status: "draft" | "published"
    createdAt: Date
    updatedAt: Date
}

export interface BlogPostInput {
    title: string
    content: string
    excerpt?: string
    coverImage?: string
    author?: string
    tags?: string[]
    status?: "draft" | "published"
}
