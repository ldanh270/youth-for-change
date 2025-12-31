"use client"

import { BlogCard } from "#/components/blog/blog-card"
import { useBlog } from "#/hooks/use-blog"
import type { BlogPost } from "#/types/blog"

import { useEffect, useState } from "react"

import Link from "next/link"

export default function BlogPage() {
    const { loading, fetchPosts, deletePost } = useBlog()
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [filter, setFilter] = useState<"all" | "published" | "draft">("all")

    useEffect(() => {
        let ignore = false

        const loadPosts = async () => {
            const status = filter === "all" ? undefined : filter
            const data = await fetchPosts(status)
            if (!ignore) {
                setPosts(data)
            }
        }

        loadPosts()

        return () => {
            ignore = true
        }
    }, [filter, fetchPosts])

    const handleDelete = async (id: string) => {
        if (confirm("Bạn có chắc muốn xóa bài viết này?")) {
            const success = await deletePost(id)
            if (success) {
                setPosts((prev) => prev.filter((p) => p._id !== id))
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">📝 Blog</h1>
                        <p className="mt-1 text-gray-600">Quản lý tất cả bài viết của bạn</p>
                    </div>

                    <Link
                        href="/write-post"
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                        <span>+</span> Viết bài mới
                    </Link>
                </header>

                {/* Filters */}
                <div className="mb-6 flex gap-2">
                    {(["all", "published", "draft"] as const).map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                                filter === f
                                    ? "bg-blue-600 text-white"
                                    : "border bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {f === "all"
                                ? "Tất cả"
                                : f === "published"
                                  ? "Đã xuất bản"
                                  : "Bản nháp"}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse rounded-xl bg-white p-5">
                                <div className="mb-4 aspect-video rounded bg-gray-200" />
                                <div className="mb-2 h-6 rounded bg-gray-200" />
                                <div className="h-4 w-2/3 rounded bg-gray-200" />
                            </div>
                        ))}
                    </div>
                ) : posts.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="mb-4 text-lg text-gray-500">Chưa có bài viết nào</p>
                        <Link href="/write-post" className="text-blue-600 hover:underline">
                            Tạo bài viết đầu tiên →
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard key={post._id} post={post} onDelete={handleDelete} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
