import type { BlogPost } from "#/types/blog"

import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
    post: BlogPost
    onDelete?: (id: string) => void
}

export function BlogCard({ post, onDelete }: BlogCardProps) {
    const formattedDate = new Date(post.createdAt).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })

    return (
        <article className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md">
            {post.coverImage && (
                <div className="aspect-video overflow-hidden">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}

            <div className="p-5">
                <div className="mb-3 flex items-center gap-2">
                    <span
                        className={`rounded-full px-2 py-1 text-xs ${
                            post.status === "published"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                        {post.status === "published" ? "Đã xuất bản" : "Bản nháp"}
                    </span>
                    <span className="text-xs text-gray-500">{formattedDate}</span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                    <h2 className="mb-2 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
                        {post.title}
                    </h2>
                </Link>

                {post.excerpt && (
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                )}

                {post.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-gray-500">Bởi {post.author}</span>

                    <div className="flex gap-2">
                        <Link
                            href={`/write-post?edit=${post._id}`}
                            className="rounded px-3 py-1 text-sm text-blue-600 transition-colors hover:bg-blue-50"
                        >
                            Sửa
                        </Link>
                        {onDelete && post._id && (
                            <button
                                onClick={() => onDelete(post._id!)}
                                className="rounded px-3 py-1 text-sm text-red-600 transition-colors hover:bg-red-50"
                            >
                                Xóa
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}
