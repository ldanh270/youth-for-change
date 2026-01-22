import { HeroSection } from "#/components/home/hero-section"
import { LatestBlogs } from "#/components/home/latest-blogs"
import { SDGShowcase } from "#/components/home/sdg-showcase"
import { StatsSection } from "#/components/home/stats-section"
import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"
import { getCachedLatestPosts } from "#/libs/cache"

export default async function HomePage() {
    const { blogs } = await getCachedLatestPosts({ limit: 6 })

    return (
        <div className="hide-scrollbar">
            <Header variant="transparent" className="z-40" />
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
