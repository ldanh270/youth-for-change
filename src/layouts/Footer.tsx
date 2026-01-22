"use client"

import { Button } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import { Separator } from "#/components/ui/separator"
import { SOCIALS } from "#/configs/socials"

import { Mail } from "lucide-react"
// 1. IMPORT i18n TOOLS
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const footerSections = [
    {
        id: "about",
        items: [
            { key: "mission", href: "/about/mission" },
            { key: "team", href: "/about/team" },
            { key: "partners", href: "/about/partners" },
            { key: "careers", href: "/careers" },
        ],
    },
    {
        id: "programs",
        items: [
            { key: "projects", href: "/projects" },
            { key: "volunteer", href: "/volunteer" },
            { key: "summit", href: "/summit" },
            { key: "training", href: "/training" },
        ],
    },
    {
        id: "resources",
        items: [
            { key: "news", href: "/news" },
            { key: "blog", href: "/blog" },
            { key: "reports", href: "/reports" },
            { key: "faqs", href: "/faqs" },
        ],
    },
    {
        id: "legal",
        items: [
            { key: "privacy", href: "/privacy" },
            { key: "terms", href: "/terms" },
            { key: "cookies", href: "/cookies" },
        ],
    },
]

export default function Footer() {
    const t = useTranslations("Footer")

    return (
        <footer className="bg-card border-border border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {/* Brand */}
                    <section className="col-span-2">
                        <Link
                            href="/"
                            className="mb-4 flex flex-row items-center justify-start gap-3"
                        >
                            <Image
                                src={"/logo.png"}
                                alt={t("brand.logoAlt")}
                                width={50}
                                height={50}
                                className="inline-block"
                            />
                            <span className="font-title from-sdg-6 to-sdg-3 flex flex-col bg-linear-to-b bg-clip-text text-2xl font-bold text-transparent">
                                Youth For Change
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-md md:max-w-sm">
                            {t("brand.description")}
                        </p>

                        {/* Newsletter */}
                        <div className="mb-6">
                            <h4 className="mb-2 font-semibold">{t("newsletter.title")}</h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    // Translate Placeholder
                                    placeholder={t("newsletter.placeholder")}
                                    className="max-w-50"
                                />
                                <Button size="icon" aria-label={t("newsletter.buttonLabel")}>
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {SOCIALS.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="bg-secondary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </section>

                    {footerSections.map((section) => (
                        <section key={section.id}>
                            <h4 className="mb-4 font-semibold">
                                {/* e.g., Footer.sections.about.title */}
                                {t(`sections.${section.id}.title`)}
                            </h4>
                            <ul className="space-y-2">
                                {section.items.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {/* e.g., Footer.sections.about.links.mission */}
                                            {t(`sections.${section.id}.links.${link.key}`)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <Separator className="my-8" />

                {/* Copyright */}
                <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                    <p>
                        © {new Date().getFullYear()} {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
