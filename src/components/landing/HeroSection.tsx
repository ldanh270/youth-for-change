"use client"

import { Button } from "#/components/ui/button"

import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
    {
        id: 1,
        title: "Empowering Youth for Sustainable Change",
        subtitle: "Join the movement to achieve the 17 Sustainable Development Goals",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
        cta: "Get Involved",
        link: "/signup",
    },
    {
        id: 2,
        title: "Climate Action Starts With You",
        subtitle: "Be part of the solution for SDG 13 - Climate Action",
        image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=1920&q=80",
        cta: "Learn More",
        link: "/sdg/13",
    },
    {
        id: 3,
        title: "Quality Education for All",
        subtitle: "Supporting SDG 4 through innovative learning programs",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
        cta: "Explore Programs",
        link: "/sdg/4",
    },
]

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section className="relative h-150 overflow-hidden lg:h-175">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="from-background/90 via-background/70 bg-card absolute inset-0 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative container mx-auto flex h-full items-center px-4">
                        <div className="max-w-2xl">
                            <h1 className="font-title text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                                {slide.title}
                            </h1>
                            <p className="text-muted-foreground mb-8 text-lg md:text-xl">
                                {slide.subtitle}
                            </p>
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
                className="bg-background/80 hover:bg-background absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 transition-colors"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="bg-background/80 hover:bg-background absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 transition-colors"
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
