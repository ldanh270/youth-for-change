import { CTASection } from "#/components/landing/CTASection"
import { FeaturedProjects } from "#/components/landing/FeaturedProjects"
import { HeroSection } from "#/components/landing/HeroSection"
import { NewsSection } from "#/components/landing/NewsSection"
import { SDGShowcase } from "#/components/landing/SDGShowcase"
import { StatsSection } from "#/components/landing/StatsSection"
import Footer from "#/layouts/Footer"
import Header from "#/layouts/Header"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
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
