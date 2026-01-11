"use client"

import SlideCard from "#/components/home/slide-card"
import { cn } from "#/libs/utils"

import { useEffect, useState } from "react"

import { PageObjectResponse, PartialPageObjectResponse, isFullPage } from "@notionhq/client"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection({
    blogs,
    className,
}: {
    blogs: (PageObjectResponse | PartialPageObjectResponse)[]
    className?: string
}) {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev === blogs.length - 1) return 0
                return prev + 1
            })
        }, 5000)
        return () => clearInterval(timer)
    }, [blogs.length])

    const nextSlide = () =>
        setCurrentSlide((prev) => {
            if (prev === blogs.length - 1) return 0
            return prev + 1
        })
    const prevSlide = () =>
        setCurrentSlide((prev) => {
            if (prev === 0) return blogs.length - 1
            return prev - 1
        })

    return (
        <section className={cn("relative h-screen w-screen", className)}>
            {blogs.filter(isFullPage).map((blog, index) => (
                <SlideCard
                    key={blog.id}
                    blog={blog}
                    className={
                        index === currentSlide
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                    }
                />
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="bg-background/80 hover:bg-background absolute top-1/2 left-4 hidden -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors lg:block"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="bg-background/80 hover:bg-background absolute top-1/2 right-4 hidden -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors lg:block"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
                {blogs.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            index === currentSlide ? "bg-primary" : "bg-muted"
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}
