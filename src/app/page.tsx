import { HeroSection } from "#/components/home/hero-section"
import { LatestBlogs } from "#/components/home/latest-blogs"
import { SDGShowcase } from "#/components/home/sdg-showcase"
import { StatsSection } from "#/components/home/stats-section"
import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"

export default async function Home() {
    return (
        <div className="hide-scrollbar">
            <Header variant="transparent" className="z-40" />
            <main className="flex-1">
                <HeroSection />
                <SDGShowcase />
                <StatsSection />
                <LatestBlogs />
            </main>
            <Footer />
        </div>
    )
}
