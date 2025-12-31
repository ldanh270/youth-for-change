"use client"

import type { BlogPost } from "#/types/blog"

import { useCallback, useState } from "react"

import { BlogEditor } from "./blog-editor"

interface BlogFormProps {
    initialData?: BlogPost
    onSubmit: (data: {
        title: string
        content: string
        excerpt: string
        coverImage: string
        tags: string[]
        status: "draft" | "published"
    }) => Promise<void>
    loading?: boolean
}

export function BlogForm({ initialData, onSubmit, loading }: BlogFormProps) {
    const [title, setTitle] = useState(initialData?.title || "")
    const [content, setContent] = useState(initialData?.content || "")
    const [excerpt, setExcerpt] = useState(initialData?.excerpt || "")
    const [coverImage, setCoverImage] = useState(initialData?.coverImage || "")
    const [tagsInput, setTagsInput] = useState(initialData?.tags?.join(", ") || "")
    const [status, setStatus] = useState<"draft" | "published">(initialData?.status || "draft")

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault()
            const tags = tagsInput
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean)

            await onSubmit({ title, content, excerpt, coverImage, tags, status })
        },
        [title, content, excerpt, coverImage, tagsInput, status, onSubmit],
    )

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tiêu đề bài viết..."
                    className="w-full border-none bg-transparent text-4xl font-bold outline-none placeholder:text-gray-300"
                    required
                />
            </div>

            {/* Cover Image URL */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Ảnh bìa (URL)
                </label>
                <input
                    type="url"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Excerpt */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Mô tả ngắn</label>
                <textarea
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Mô tả ngắn gọn về bài viết..."
                    rows={2}
                    className="w-full resize-none rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Tags */}
            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Tags (phân cách bởi dấu phẩy)
                </label>
                <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="react, nextjs, tutorial"
                    className="w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Editor */}
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Nội dung</label>
                <BlogEditor initialContent={content} onChange={setContent} />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-4">
                    <label className="flex cursor-pointer items-center gap-2">
                        <input
                            type="radio"
                            name="status"
                            value="draft"
                            checked={status === "draft"}
                            onChange={() => setStatus("draft")}
                            className="text-blue-600"
                        />
                        <span className="text-sm">Bản nháp</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2">
                        <input
                            type="radio"
                            name="status"
                            value="published"
                            checked={status === "published"}
                            onChange={() => setStatus("published")}
                            className="text-blue-600"
                        />
                        <span className="text-sm">Xuất bản</span>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading || !title || !content}
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? "Đang lưu..." : initialData ? "Cập nhật" : "Tạo bài viết"}
                </button>
            </div>
        </form>
    )
}
