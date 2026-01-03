"use client"

import SDGElement from "#/components/sdgs/sdg-element"
import { SDGs } from "#/configs/constants/sdgs"

import { type Variants, motion } from "framer-motion"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

export default function SDGList() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            {SDGs.map(({ id, color, title, description, image }) => (
                <SDGElement
                    key={id}
                    id={id}
                    title={title}
                    color={color}
                    description={description}
                    image={image}
                />
            ))}
        </motion.div>
    )
}
