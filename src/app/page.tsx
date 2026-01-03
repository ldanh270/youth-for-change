import { FeaturedProjects } from "#/components/home/FeaturedProjects"
import { HeroSection } from "#/components/home/HeroSection"
import { NewsSection } from "#/components/home/NewsSection"
import { SDGShowcase } from "#/components/home/SDGShowcase"
import { StatsSection } from "#/components/home/StatsSection"
import Footer from "#/components/layouts/Footer"
import Header from "#/components/layouts/Header"

export default function Home() {
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
