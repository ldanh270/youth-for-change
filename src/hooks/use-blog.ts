"use client"

import type { BlogPost, BlogPostInput } from "#/types/blog"

import { useCallback, useState } from "react"

export function useBlog() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchPosts = useCallback(async (status?: "draft" | "published"): Promise<BlogPost[]> => {
        setLoading(true)
        setError(null)
        try {
            const url = status ? `/api/posts?status=${status}` : "/api/posts"
            const res = await fetch(url)
            if (!res.ok) throw new Error("Failed to fetch posts")
            return await res.json()
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
            return []
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchPost = useCallback(async (id: string): Promise<BlogPost | null> => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`/api/posts/${id}`)
            if (!res.ok) throw new Error("Failed to fetch post")
            return await res.json()
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    const createPost = useCallback(async (input: BlogPostInput): Promise<BlogPost | null> => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            })
            if (!res.ok) throw new Error("Failed to create post")
            return await res.json()
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
            return null
        } finally {
            setLoading(false)
        }
    }, [])

    const updatePost = useCallback(
        async (id: string, input: Partial<BlogPostInput>): Promise<BlogPost | null> => {
            setLoading(true)
            setError(null)
            try {
                const res = await fetch(`/api/posts/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(input),
                })
                if (!res.ok) throw new Error("Failed to update post")
                return await res.json()
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred")
                return null
            } finally {
                setLoading(false)
            }
        },
        [],
    )

    const deletePost = useCallback(async (id: string): Promise<boolean> => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`/api/posts/${id}`, { method: "DELETE" })
            if (!res.ok) throw new Error("Failed to delete post")
            return true
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
            return false
        } finally {
            setLoading(false)
        }
    }, [])

    return {
        loading,
        error,
        fetchPosts,
        fetchPost,
        createPost,
        updatePost,
        deletePost,
    }
}
