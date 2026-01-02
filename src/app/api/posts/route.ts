import { blogService } from "#/lib/blog-service"

import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get("status") as "draft" | "published" | null

        const posts = await blogService.getAll(status || undefined)
        return NextResponse.json(posts)
    } catch (error) {
        console.error("GET /api/posts error:", error)
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        if (!body.title || !body.content) {
            return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
        }

        const post = await blogService.create(body)
        return NextResponse.json(post, { status: 201 })
    } catch (error) {
        console.error("POST /api/posts error:", error)
        return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
    }
}
