"use client"

import { Award, Globe, Target, Users } from "lucide-react"
import { useTranslations } from "next-intl"

const statConfig = [
    {
        id: "volunteers",
        icon: Users,
    },
    {
        id: "countries",
        icon: Globe,
    },
    {
        id: "projects",
        icon: Target,
    },
    {
        id: "sdgs",
        icon: Award,
    },
]

export function StatsSection() {
    const t = useTranslations("HomePage.StatsSection")

    return (
        <section className="bg-primary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="font-title mb-4 text-3xl font-bold md:text-4xl">
                        {t("heading")}
                    </h2>
                    <p className="text-primary-foreground/80 mx-auto max-w-2xl">
                        {t("subheading")}
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {statConfig.map((stat) => (
                        <div key={stat.id} className="text-center">
                            <div className="bg-primary-foreground/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                                <stat.icon className="h-8 w-8" />
                            </div>
                            <div className="font-title mb-2 text-4xl font-bold md:text-5xl">
                                {/* Dynamic lookup: StatsSection.items.[id].value */}
                                {t(`items.${stat.id}.value`)}
                            </div>
                            <div className="mb-1 text-lg font-medium">
                                {t(`items.${stat.id}.label`)}
                            </div>
                            <div className="text-primary-foreground/70 text-sm">
                                {t(`items.${stat.id}.description`)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
