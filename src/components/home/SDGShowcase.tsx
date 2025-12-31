"use client"

import { Card, CardContent } from "#/components/ui/card"

import Link from "next/link"

const sdgs = [
    { id: 1, name: "No Poverty", color: "bg-sdg-1" },
    { id: 2, name: "Zero Hunger", color: "bg-sdg-2" },
    { id: 3, name: "Good Health", color: "bg-sdg-3" },
    { id: 4, name: "Quality Education", color: "bg-sdg-4" },
    { id: 5, name: "Gender Equality", color: "bg-sdg-5" },
    { id: 6, name: "Clean Water", color: "bg-sdg-6" },
    { id: 7, name: "Clean Energy", color: "bg-sdg-7" },
    { id: 8, name: "Decent Work", color: "bg-sdg-8" },
    { id: 9, name: "Innovation", color: "bg-sdg-9" },
    { id: 10, name: "Reduced Inequalities", color: "bg-sdg-10" },
    { id: 11, name: "Sustainable Cities", color: "bg-sdg-11" },
    { id: 12, name: "Responsible Consumption", color: "bg-sdg-12" },
    { id: 13, name: "Climate Action", color: "bg-sdg-13" },
    { id: 14, name: "Life Below Water", color: "bg-sdg-14" },
    { id: 15, name: "Life on Land", color: "bg-sdg-15" },
    { id: 16, name: "Peace & Justice", color: "bg-sdg-16" },
    { id: 17, name: "Partnerships", color: "bg-sdg-17" },
]

export function SDGShowcase() {
    return (
        <section className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                        17 Sustainable Development Goals
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl">
                        Explore our initiatives aligned with the United Nations Sustainable
                        Development Goals
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 md:gap-3 lg:grid-cols-9">
                    {sdgs.map((sdg) => (
                        <Link key={sdg.id} href={`/sdg/${sdg.id}`}>
                            <Card
                                className={`${sdg.color} cursor-pointer border-0 transition-transform hover:scale-105`}
                            >
                                <CardContent className="p-3 text-center md:p-4">
                                    <div className="mb-1 text-2xl font-bold text-white md:text-3xl">
                                        {sdg.id}
                                    </div>
                                    <div className="text-[10px] leading-tight text-white/90 md:text-xs">
                                        {sdg.name}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
