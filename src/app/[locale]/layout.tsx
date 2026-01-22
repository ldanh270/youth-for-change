import { trackingId } from "#/configs/env.config"
import { routing } from "#/i18n/routing"
import StickyHeader from "#/layouts/sticky-header"

import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"
import { notFound } from "next/navigation"

import "../globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Youth for change",
    icons: "/logo.png",
    description: "Youth for change 2025 - Landing page website for 17 SDGs communication",
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
            >
                <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
                    <NextIntlClientProvider>
                        <div className="flex min-h-screen flex-col">
                            <StickyHeader />
                            {children}
                            <GoogleAnalytics gaId={trackingId} />
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
