import Image from "next/image"

export default function HeroAboutSection() {
    return (
        <section className="from-primary/10 via-accent/5 to-background relative overflow-hidden bg-linear-to-br py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="animate-fade-in-down mx-auto max-w-4xl space-y-6 text-center opacity-0">
                    <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold">
                        We&apos;re Here!
                    </span>
                    <h1 className="font-title text-foreground text-4xl font-bold md:text-6xl">
                        Let&apos;s Meet <span className="text-primary">Our Team</span>
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
                        We are a community of young people passionate about creating positive
                        change, working towards the United Nations Sustainable Development Goals.
                    </p>
                    <Image
                        src={"/abouts/teamwork.jpg"}
                        width={1000}
                        height={1000}
                        alt="Our team hero image"
                        className="rounded-2xl hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}
