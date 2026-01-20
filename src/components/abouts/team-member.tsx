import { TEAM_MEMBERS } from "#/configs/members"
import { SOCIALS } from "#/configs/socials"

import Image from "next/image"
import Link from "next/link"

export default function TeamMembersSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-8xl mx-auto">
                    <div className="animate-fade-in-up mb-12 text-center opacity-0">
                        <h2 className="font-title text-foreground mb-4 text-4xl font-bold md:text-6xl">
                            Team members
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            We&apos;re lucky to be supported by some of the best investors in the
                            world.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 px-5 *:w-full *:sm:w-[calc(100%/3-3rem)] md:gap-12 *:lg:w-[calc(100%/5-3rem)]">
                        {TEAM_MEMBERS.map(({ name, role, image, socials }, index) => (
                            <div
                                key={name}
                                className="group animate-fade-in-up opacity-0"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="space-y-4 space-x-4">
                                    {/* Avatar */}
                                    <div className="from-muted to-muted/50 relative aspect-square overflow-hidden rounded-full bg-linear-to-br">
                                        <div className="flex h-full w-full items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110">
                                            <Image
                                                src={image}
                                                alt="Member avatars"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col items-center *:text-center">
                                        <h3 className="font-title text-foreground text-lg font-bold">
                                            {name}
                                        </h3>
                                        <p className="text-primary text-sm font-semibold">{role}</p>

                                        {/* Social Links */}
                                        <div className="flex gap-3 pt-2">
                                            {socials.map(({ label, link }) => {
                                                const socialConfig = SOCIALS.find(
                                                    (s) => s.label === label,
                                                )
                                                const Icon = socialConfig?.icon
                                                return (
                                                    <Link
                                                        key={label}
                                                        href={link}
                                                        className="bg-secondary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                                                        aria-label={label}
                                                    >
                                                        {Icon ? <Icon className="h-5 w-5" /> : null}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
