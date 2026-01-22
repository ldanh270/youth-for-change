"use client"

import { useTranslations } from "next-intl"

export default function SDGHeading() {
    const t = useTranslations("SDGsPage.Heading")

    return (
        <div className="animate-fade-in-up mb-16 text-center">
            {/* Badge */}
            <div className="from-sdg-14 to-sdg-15 text-primary-foreground mb-6 inline-block rounded-full bg-linear-to-r px-6 py-2 text-sm font-semibold shadow-lg">
                {t("Badge")}
            </div>
            <h1 className="from-sdg-14 to-sdg-3 lg:text-10xl mb-6 bg-linear-to-r bg-clip-text py-3 text-5xl font-bold text-transparent md:text-7xl">
                {t("Title")}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
                {t("Description")}
            </p>
        </div>
    )
}
