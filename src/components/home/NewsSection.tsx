"use client"

import { Button } from "#/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "#/components/ui/card"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const news = [
    {
        id: 1,
        title: "Youth Summit 2024: Shaping Tomorrow's Leaders",
        excerpt:
            "Join us for the annual Youth for Change Summit featuring workshops, keynote speakers, and networking opportunities.",
        date: "2024-03-15",
        category: "Events",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    },
    {
        id: 2,
        title: "Partnership with UNDP Announced",
        excerpt: "Exciting collaboration to expand our reach and impact across Southeast Asia.",
        date: "2024-03-10",
        category: "Announcements",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
        id: 3,
        title: "Impact Report 2023 Released",
        excerpt: "Celebrating our achievements and looking forward to new goals in sustainability.",
        date: "2024-03-05",
        category: "Reports",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
        id: 4,
        title: "New Volunteer Training Program",
        excerpt:
            "Enhanced training curriculum to empower volunteers with essential skills for community impact.",
        date: "2024-03-01",
        category: "Programs",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    },
]

export function NewsSection() {
    return (
        <section className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                            Latest News
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Stay updated with our latest initiatives and announcements
                        </p>
                    </div>
                    <Button variant="outline" asChild className="mt-4 md:mt-0">
                        <Link href="/news">
                            All News <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {news.map((item, index) => (
                        <Card
                            key={item.id}
                            className={`overflow-hidden transition-shadow hover:shadow-lg ${
                                index === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                        >
                            <div
                                className={`overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-40"}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                                    <span className="text-primary font-medium">
                                        {item.category}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center">
                                        <Calendar className="mr-1 h-3 w-3" />
                                        {new Date(item.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>
                                <CardTitle className={index === 0 ? "text-2xl" : "text-lg"}>
                                    {item.title}
                                </CardTitle>
                                <CardDescription className={index === 0 ? "" : "line-clamp-2"}>
                                    {item.excerpt}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
