"use client"

import { Badge } from "#/components/ui/badge"
import { Button } from "#/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/ui/card"

import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        id: 1,
        title: "Green Campus Initiative",
        description:
            "Transforming educational institutions into sustainable environments through waste reduction and renewable energy.",
        image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80",
        sdgs: [7, 11, 13],
        participants: 250,
        status: "Active",
    },
    {
        id: 2,
        title: "Digital Literacy for All",
        description:
            "Bridging the digital divide by providing technology education to underserved communities.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
        sdgs: [4, 9, 10],
        participants: 180,
        status: "Active",
    },
    {
        id: 3,
        title: "Ocean Cleanup Challenge",
        description:
            "Youth-led initiative to remove plastic waste from local waterways and raise awareness about marine conservation.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        sdgs: [6, 14, 15],
        participants: 320,
        status: "Ongoing",
    },
]

export function FeaturedProjects() {
    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 className="font-title text-foreground mb-4 text-3xl font-bold md:text-4xl">
                            Featured Projects
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            Discover impactful initiatives led by passionate young changemakers
                        </p>
                    </div>
                    <Button variant="outline" asChild className="mt-4 md:mt-0">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="overflow-hidden transition-shadow hover:shadow-lg"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="mb-2 flex items-center justify-between">
                                    <Badge
                                        variant="secondary"
                                        className="bg-success/10 text-success"
                                    >
                                        {project.status}
                                    </Badge>
                                    <div className="flex gap-1">
                                        {project.sdgs.map((sdg) => (
                                            <Badge key={sdg} variant="outline" className="text-xs">
                                                SDG {sdg}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-muted-foreground flex items-center text-sm">
                                    <Users className="mr-1 h-4 w-4" />
                                    <span>{project.participants} participants</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
