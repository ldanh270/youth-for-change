import HeroAboutSection from "#/components/abouts/hero-section"
import OurMissionSection from "#/components/abouts/our-mission"
import TeamMembersSection from "#/components/abouts/team-member"

export default function AboutUsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroAboutSection />

            {/* Team Members Section */}
            <TeamMembersSection />

            {/* Mission Statement */}
            <OurMissionSection />
        </div>
    )
}
