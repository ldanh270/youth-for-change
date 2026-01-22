"use client"

import { Card } from "#/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "#/components/ui/carousel"
import { SDGs } from "#/configs/sdgs"

import { useRef } from "react"

import AutoScroll from "embla-carousel-auto-scroll"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function SDGShowcase() {
    const plugin = useRef(
        AutoScroll({
            speed: 1, // Slider speed
            startDelay: 0, // No delay
            stopOnInteraction: false, // Continue scroll after drag
            stopOnMouseEnter: true, // Pause on hover
        }),
    )

    const t = useTranslations("HomePage.SDGsShowcase")

    return (
        <section className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                        {t("Title")}
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-3xl">{t("Subtitle")}</p>
                </div>

                {/* Carousel */}
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    opts={{
                        loop: true, // For infinity scroll
                        align: "start",
                        dragFree: true, // Let user drag on mobile
                    }}
                >
                    <CarouselContent className="my-2">
                        {SDGs.map(({ id, color, image }) => (
                            <CarouselItem
                                key={id}
                                className="basis-1/3 pl-4 md:basis-1/5 lg:basis-1/8"
                            >
                                <Card
                                    className={`${color} cursor-pointer rounded-2xl border-0 transition-transform hover:scale-105`}
                                >
                                    <Image
                                        src={image}
                                        alt="SDG Image"
                                        width={300}
                                        height={300}
                                        className="rounded-2xl"
                                    />
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}
