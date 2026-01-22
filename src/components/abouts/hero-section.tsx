"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

export default function HeroAboutSection() {
    const t = useTranslations("AboutPage.HeroSection")

    return (
        <section className="from-primary/10 via-accent/5 to-background relative overflow-hidden bg-linear-to-br py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="animate-fade-in-down mx-auto max-w-4xl space-y-6 text-center opacity-0">
                    <h1 className="font-title text-foreground text-4xl font-bold md:text-6xl">
                        {/* t.rich allows us to replace the <highlight> tag from the JSON with actual HTML/JSX
                         */}
                        {t.rich("title", {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>,
                        })}
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
                        {t("description")}
                    </p>
                    <Image
                        src={"/abouts/teamwork.jpg"}
                        width={1000}
                        height={1000}
                        alt={t("imageAlt")}
                        className="rounded-2xl transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}
