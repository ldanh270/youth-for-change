"use client"

import SDGElement from "#/components/sdgs/sdg-element"

import { type Variants, motion } from "framer-motion"

const sdgs = [
    {
        number: 1,
        title: "No Poverty",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-1",
        image: "/sdg/goal_1.svg",
    },
    {
        number: 2,
        title: "Zero Hunger",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-2",
        image: "/sdg/goal_2.svg",
    },
    {
        number: 3,
        title: "Good Health and Well-Being",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-3",
        image: "/sdg/goal_3.svg",
    },
    {
        number: 4,
        title: "Quality Education",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-4",
        image: "/sdg/goal_4.svg",
    },
    {
        number: 5,
        title: "Gender Equality",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-5",
        image: "/sdg/goal_5.svg",
    },

    {
        number: 6,
        title: "Clean Water and Sanitation",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-6",
        image: "/sdg/goal_6.svg",
    },
    {
        number: 7,
        title: "Affordable and Clean Energy",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-7",
        image: "/sdg/goal_7.svg",
    },
    {
        number: 8,
        title: "Decent Work and Economic Growth",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-8",
        image: "/sdg/goal_8.svg",
    },
    {
        number: 9,
        title: "Industry, Innovation and Infrastructure",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-9",
        image: "/sdg/goal_9.svg",
    },
    {
        number: 10,
        title: "Reduced Inequality",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-10",
        image: "/sdg/goal_10.svg",
    },
    {
        number: 11,
        title: "Sustainable Cities and Communities",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-11",
        image: "/sdg/goal_11.svg",
    },
    {
        number: 12,
        title: "Responsible Consumption and Production",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-12",
        image: "/sdg/goal_12.svg",
    },
    {
        number: 13,
        title: "Climate Action",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-13",
        image: "/sdg/goal_13.svg",
    },
    {
        number: 14,
        title: "Life Below Water",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-14",
        image: "/sdg/goal_14.svg",
    },
    {
        number: 15,
        title: "Life on Land",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-15",
        image: "/sdg/goal_15.svg",
    },
    {
        number: 16,
        title: "Peace, Justice and Strong Institutions",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-16",
        image: "/sdg/goal_16.svg",
    },
    {
        number: 17,
        title: "Partnerships for the Goals",
        description:
            "Protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, managing forests, combating desertification, halting and reversing land degradation, and halting biodiversity loss are key to sustainable development.",
        colorClass: "bg-sdg-17",
        image: "/sdg/goal_17.svg",
    },
]

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
            {sdgs.map(({ number, colorClass, title, description, image }) => (
                <SDGElement
                    key={number}
                    number={number}
                    title={title}
                    colorClass={colorClass}
                    description={description}
                    image={image}
                />
            ))}
        </motion.div>
    )
}
