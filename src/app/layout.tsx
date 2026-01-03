import StickyHeader from "#/components/layouts/sticky-header"

import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono, Montserrat } from "next/font/google"

import "./globals.css"

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
    description: "Youth for change 2025 - Landing page website for 17 SDGs communication",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        <StickyHeader />
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
