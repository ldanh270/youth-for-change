"use client"

import Header from "#/layouts/Header"
import { cn } from "#/libs/utils"

import { useState } from "react"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"

export default function StickyHeader() {
    const { scrollY } = useScroll()

    // Hide in top (Default)
    const [hidden, setHidden] = useState(true)

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        const previous = scrollY.getPrevious() || 0

        // Logic show/hide
        if (latest < 150) {
            setHidden(true) // Scroll to top (150px from top) -> Hide
        } else if (latest > previous) {
            setHidden(true) // Scroll down -> Hide
        } else {
            setHidden(false) // Scroll up -> Show
        }
    })

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 1 },
                }}
                initial="hidden"
                animate={hidden ? "hidden" : "visible"}
                // Transition (animation) for header
                transition={{
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.3,
                }}
                className={cn("fixed top-0 right-0 left-0 z-50 flex h-fit")}
            >
                <Header variant="solid" className="fixed" />
            </motion.header>
        </>
    )
}
