"use client"

import { Button } from "#/components/ui/button"

import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
    {
        id: 0,
        title: "Empowering Youth for Sustainable Change",
        subtitle: "Join the movement to achieve the 17 Sustainable Development Goals",
        image: "/hero/friends.jpg",
        cta: "Get Involved",
        link: "/signup",
    },
    {
        id: 1,
        title: "Climate Action Starts With You",
        subtitle: "Be part of the solution for SDG 13 - Climate Action",
        image: "/hero/eco_ego.jpg",
        cta: "Learn More",
        link: "/sdg/13",
    },
    {
        id: 2,
        title: "Quality Education for All",
        subtitle: "Supporting SDG 4 through innovative learning programs",
        image: "/hero/library.jpg",
        cta: "Explore Programs",
        link: "/sdg/4",
    },
]

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev === slides.length - 1) return 0
                return prev + 1
            })
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () =>
        setCurrentSlide((prev) => {
            if (prev === slides.length - 1) return 0
            return prev + 1
        })
    const prevSlide = () =>
        setCurrentSlide((prev) => {
            if (prev === 0) return slides.length - 1
            return prev - 1
        })

    return (
        <section className="relative h-screen w-full">
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        slide.id === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    {/* Content */}
                    <div className="relative container mx-auto flex h-full items-center px-4">
                        <div className="max-w-2xl">
                            <h1 className="font-title mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
                                {slide.title}
                            </h1>
                            <p className="mb-8 text-lg text-white md:text-xl">{slide.subtitle}</p>
                            <Button asChild size="lg" className="px-8 text-lg">
                                <Link href={slide.link}>{slide.cta}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="bg-background/80 hover:bg-background absolute top-1/2 left-4 hidden -translate-y-1/2 rounded-full p-2 transition-colors lg:block"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="bg-background/80 hover:bg-background absolute top-1/2 right-4 hidden -translate-y-1/2 rounded-full p-2 transition-colors lg:block"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
                {slides.map((_, index) => (
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
