import { HeroSection } from "#/components/home/hero-section"
import { LatestBlogs } from "#/components/home/latest-blogs"
import { SDGShowcase } from "#/components/home/sdg-showcase"
import { StatsSection } from "#/components/home/stats-section"
import Footer from "#/layouts/Footer"
import { getCachedLatestPosts } from "#/libs/cache"
import { Metadata } from "next";
import { useTranslations } from "next-intl";

const t = useTranslations("HomePage")

export const metadata: Metadata = {
    title: `${t("Title")} ${t("SDGsShowcase.Title")}`,
    description: `${t("SDGsShowcase.Subtitle")}`,
    openGraph: {
        title: `${t("Title")} t("SDGsShowcase.Title")}`,
        description: `${t("SDGsShowcase.Title")}`,
        type: "website",
    },
}
export default async function HomePage() {
    const { blogs } = await getCachedLatestPosts({ limit: 6 })

    return (
        <div className="hide-scrollbar">
            <main className="flex-1">
                <HeroSection className="animate-fade-in" blogs={blogs} />
                <SDGShowcase />
                <StatsSection />
                <LatestBlogs blogs={blogs} />
            </main>
            <Footer />
        </div>
    )
}
