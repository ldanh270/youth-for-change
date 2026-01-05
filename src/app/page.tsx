import { FeaturedProjects } from "#/components/home/FeaturedProjects"
import { NewsSection } from "#/components/home/NewsSection"
import { StatsSection } from "#/components/home/StatsSection"
import { HeroSection } from "#/components/home/hero-section"
import { SDGShowcase } from "#/components/home/sdg-showcase"
import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"

export default async function Home() {
    return (
        <div className="hide-scrollbar">
            <Header variant="transparent" className="z-40" />
            <main className="flex-1">
                <HeroSection />
                <SDGShowcase />
                <FeaturedProjects />
                <StatsSection />
                <NewsSection />
            </main>
            <Footer />
        </div>
    )
}
