import { useTranslations } from "next-intl"

export default function OurMissionSection() {
    const t = useTranslations("AboutPage.Mission")
    return (
        <section className="from-primary via-primary/90 to-accent relative overflow-hidden bg-linear-to-br py-20 text-white">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="animate-fade-in mx-auto max-w-3xl space-y-6 text-center opacity-0">
                    <h2 className="font-title text-3xl leading-tight font-bold md:text-5xl">
                        {t("Title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                        {t("Description")}
                    </p>
                </div>
            </div>
        </section>
    )
}
