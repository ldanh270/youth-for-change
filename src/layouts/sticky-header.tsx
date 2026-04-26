"use client"

import Header from "#/layouts/Header"
import { cn } from "#/libs/utils"

import { useEffect, useState } from "react"
import { usePathname } from "#/i18n/navigation"

export default function StickyHeader() {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    
    // Check if we are on Home page (usePathname from next-intl returns path without locale)
    const isHomePage = pathname === "/" || pathname === "" || pathname === "/en" || pathname === "/vi"

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const scrollDifference = Math.abs(currentScrollY - lastScrollY)
            
            // Background change logic
            setScrolled(currentScrollY > 20)

            // Show/hide logic
            if (currentScrollY < 100) {
                setVisible(true) // Always show at top
            } else if (scrollDifference > 10) {
                if (currentScrollY > lastScrollY) {
                    setVisible(false) // Scroll down -> Hide
                } else {
                    setVisible(true) // Scroll up -> Show
                }
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <div 
            className={cn(
                "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
                visible ? "translate-y-0" : "-translate-y-full",
                scrolled && visible && "shadow-md"
            )}
        >
            <Header 
                variant={isHomePage && !scrolled ? "transparent" : "solid"} 
                className="static" 
            />
        </div>
    )
}
