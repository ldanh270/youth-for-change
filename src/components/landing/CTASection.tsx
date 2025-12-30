"use client"

import { Button } from "#/components/ui/button"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="from-primary via-primary to-sdg-13 bg-card py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-title text-primary-foreground mb-6 text-3xl font-bold md:text-5xl">
                    Ready to Make a Difference?
                </h2>
                <p className="text-primary-foreground/80 mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                    Join thousands of young leaders who are driving positive change in their
                    communities. Your journey towards sustainable impact starts here.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button asChild size="lg" variant="secondary" className="px-8 text-lg">
                        <Link href="/signup">
                            Join Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent px-8 text-lg"
                    >
                        <Link href="/about">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
