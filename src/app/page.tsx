import { CTASection } from "#/components/home/CTASection"
import { FeaturedProjects } from "#/components/home/FeaturedProjects"
import { HeroSection } from "#/components/home/HeroSection"
import { NewsSection } from "#/components/home/NewsSection"
import { SDGShowcase } from "#/components/home/SDGShowcase"
import { StatsSection } from "#/components/home/StatsSection"
import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"

export default function Home() {
    return (
        <div className="hide-scrollbar">
            <Header variant="hero" />
            <main className="flex-1">
                <HeroSection />
                <SDGShowcase />
                <FeaturedProjects />
                <StatsSection />
                <NewsSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}
