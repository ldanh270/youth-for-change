"use client"

import { Award, Globe, Target, Users } from "lucide-react"

const stats = [
    {
        icon: Users,
        value: "10,000+",
        label: "Active Volunteers",
        description: "Young changemakers worldwide",
    },
    {
        icon: Globe,
        value: "50+",
        label: "Countries",
        description: "Global reach and impact",
    },
    {
        icon: Target,
        value: "200+",
        label: "Projects",
        description: "SDG-aligned initiatives",
    },
    {
        icon: Award,
        value: "17",
        label: "SDGs Addressed",
        description: "Comprehensive sustainability focus",
    },
]

export function StatsSection() {
    return (
        <section className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="font-title mb-4 text-3xl font-bold md:text-4xl">
                        Our Impact in Numbers
                    </h2>
                    <p className="text-primary-foreground/80 mx-auto max-w-xl">
                        Together, we&apos;re making a measurable difference in communities around
                        the world
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-primary-foreground/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                                <stat.icon className="h-8 w-8" />
                            </div>
                            <div className="font-title mb-2 text-4xl font-bold md:text-5xl">
                                {stat.value}
                            </div>
                            <div className="mb-1 text-lg font-medium">{stat.label}</div>
                            <div className="text-primary-foreground/70 text-sm">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
