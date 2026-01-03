"use client"

import { useBlog } from "#/hooks/use-blog"
import type { BlogPost } from "#/types/blog"

import { Suspense, useEffect, useState } from "react"

import dynamic from "next/dynamic"
import { useRouter, useSearchParams } from "next/navigation"

const BlogForm = dynamic(() => import("#/components/blog/blog-form").then((mod) => mod.BlogForm), {
    ssr: false,
    loading: () => <FormSkeleton />,
})

function FormSkeleton() {
    return (
        <div className="animate-pulse space-y-6">
            <div className="h-12 w-3/4 rounded bg-gray-200" />
            <div className="h-10 rounded bg-gray-200" />
            <div className="h-20 rounded bg-gray-200" />
            <div className="h-10 rounded bg-gray-200" />
            <div className="h-96 rounded bg-gray-200" />
        </div>
    )
}

function WritePostContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const editId = searchParams.get("edit")

    const { loading, createPost, updatePost, fetchPost } = useBlog()
    const [post, setPost] = useState<BlogPost | null>(null)
    const [initialLoading, setInitialLoading] = useState(!!editId)

    useEffect(() => {
        if (editId) {
            fetchPost(editId).then((data) => {
                setPost(data)
                setInitialLoading(false)
            })
        }
    }, [editId, fetchPost])

    const handleSubmit = async (data: {
        title: string
        content: string
        excerpt: string
        coverImage: string
        tags: string[]
        status: "draft" | "published"
    }) => {
        let result

        if (editId && post) {
            result = await updatePost(editId, data)
        } else {
            result = await createPost(data)
        }

        if (result) {
            router.push("/blog")
        }
    }

    if (initialLoading) {
        return <FormSkeleton />
    }

    return <BlogForm initialData={post || undefined} onSubmit={handleSubmit} loading={loading} />
}

export default function WritePostPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">✍️ Viết bài mới</h1>
                    <p className="mt-2 text-gray-600">
                        Sử dụng editor giống Notion để tạo bài viết của bạn
                    </p>
                </header>

                <main className="rounded-xl border bg-white p-6 shadow-sm">
                    <Suspense fallback={<FormSkeleton />}>
                        <WritePostContent />
                    </Suspense>
                </main>
            </div>
        </div>
    )
}
