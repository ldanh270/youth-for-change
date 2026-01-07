import { Button } from "#/components/ui/button"
import { Input } from "#/components/ui/input"
import { Separator } from "#/components/ui/separator"
import { socialLinks } from "#/configs/constants/socials"

import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const footerLinks = {
    about: [
        { label: "Our Mission", href: "/about/mission" },
        { label: "Our Team", href: "/about/team" },
        { label: "Partners", href: "/about/partners" },
        { label: "Careers", href: "/careers" },
    ],
    programs: [
        { label: "SDG Projects", href: "/projects" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Youth Summit", href: "/summit" },
        { label: "Training", href: "/training" },
    ],
    resources: [
        { label: "News", href: "/news" },
        { label: "Blog", href: "/blog" },
        { label: "Reports", href: "/reports" },
        { label: "FAQs", href: "/faqs" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-card border-border border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link
                            href="/"
                            className="mb-4 flex flex-row items-center justify-start gap-3"
                        >
                            <Image
                                src={"/logo.png"}
                                alt="Logo"
                                width={50}
                                height={50}
                                className="inline-block"
                            />
                            <span className="font-title from-sdg-6 to-sdg-3 flex flex-col bg-linear-to-b bg-clip-text text-2xl font-bold text-transparent">
                                Youth For Change
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-6 max-w-md md:max-w-sm">
                            A community project that enhances UD–UFLS students’ SDG knowledge,
                            fosters positive attitudes, and promotes sustainable practices in daily
                            life.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-6">
                            <h4 className="mb-2 font-semibold">Subscribe to our newsletter</h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="max-w-50"
                                />
                                <Button size="icon">
                                    <Mail className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
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
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="mb-4 font-semibold">About</h4>
                        <ul className="space-y-2">
                            {footerLinks.about.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="mb-4 font-semibold">Programs</h4>
                        <ul className="space-y-2">
                            {footerLinks.programs.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="mb-4 font-semibold">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="mb-4 font-semibold">Legal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Copyright */}
                <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                    <p>© {new Date().getFullYear()} Youth for Change. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
