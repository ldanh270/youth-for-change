export default function OurMissionSection() {
    return (
        <section className="from-primary via-primary/90 to-accent relative overflow-hidden bg-linear-to-br py-20 text-white">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="animate-fade-in mx-auto max-w-3xl space-y-6 text-center opacity-0">
                    <h2 className="font-title text-3xl leading-tight font-bold md:text-5xl">
                        We only deliver results.
                    </h2>
                    <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                        We are committed to delivering sustainable and effective solutions, not just
                        empty promises, but concrete, measurable actions.
                    </p>
                </div>
            </div>
        </section>
    )
}
