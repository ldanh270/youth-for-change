"use client"

import { Badge } from "#/components/ui/badge"
import { SDGs } from "#/configs/constants/sdgs"

import Link from "next/link"

export default function BlogHeader({ className, tag }: { className?: string; tag?: string }) {
    const checkTags = ({ id }: { id: number }) => {
        if (tag) {
            if (tag === id.toString()) return `/blogs`
            return `/blogs?tag=${id}`
        }
        return `/blogs?tag=${id}`
    }

    return (
        <div className={`mb-16 space-y-4 text-center ${className}`}>
            {/* Title */}
            <h1 className="text-foreground font-title text-4xl font-bold md:text-5xl lg:text-6xl">
                Blogs
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
                Learn about sustainable development goals, inspiring stories, and useful knowledge
                to create positive change for your community together.
            </p>

            {/* Badges */}
            <div className="flex w-full flex-row gap-2">
                {SDGs.map(({ id, color }) => (
                    <Link href={checkTags({ id })} key={id}>
                        <Badge
                            variant={"default"}
                            className={`bg-${color} text-center text-white shadow-sm backdrop-blur-md`}
                        >
                            <span className="text-center">SDG {id}</span>
                        </Badge>
                    </Link>
                ))}
            </div>
        </div>
    )
}
