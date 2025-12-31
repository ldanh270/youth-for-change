import { blogService } from "#/lib/blog-service"

import { NextRequest, NextResponse } from "next/server"

interface Params {
    params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const post = await blogService.getById(id)

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 })
        }

        return NextResponse.json(post)
    } catch (error) {
        console.error("GET /api/posts/[id] error:", error)
        return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const body = await request.json()

        const post = await blogService.update(id, body)

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 })
        }

        return NextResponse.json(post)
    } catch (error) {
        console.error("PUT /api/posts/[id] error:", error)
        return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: Params) {
    try {
        const { id } = await params
        const success = await blogService.delete(id)

        if (!success) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 })
        }

        return NextResponse.json({ message: "Post deleted successfully" })
    } catch (error) {
        console.error("DELETE /api/posts/[id] error:", error)
        return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
    }
}
