"use client"

import { Card, CardContent } from "#/components/ui/card"

import { type Variants, motion } from "framer-motion"
import Image from "next/image"

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

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
        },
    },
}

export default function SDGInfo() {
    return (
        <div className="from-background via-card to-background min-h-screen bg-linear-to-br">
            <div className="container mx-auto px-4 py-16">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 text-center"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="from-sdg-14 to-sdg-15 text-primary-foreground mb-6 inline-block rounded-full bg-linear-to-r px-6 py-2 text-sm font-semibold shadow-lg"
                    >
                        UN Sustainable Development Goals
                    </motion.div>
                    <h1 className="from-sdg-14 to-sdg-3 lg:text-10xl mb-6 bg-linear-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
                        17 Goals to Transform Our World
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
                        The Sustainable Development Goals are a universal call to action to end
                        poverty, protect the planet, and ensure that by 2030 all people enjoy peace
                        and prosperity.
                    </p>
                </motion.div>

                {/* SDGs list */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-6"
                >
                    {sdgs.map(({ number, colorClass, title, description, image }) => (
                        <motion.div key={number} variants={itemVariants}>
                            <Card className="group overflow-hidden border-0 shadow-md transition-all duration-500 hover:shadow-2xl">
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <motion.div
                                            className={`relative flex w-full items-center justify-center p-8 md:w-64 ${colorClass}`}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ delay: 0.2 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                        >
                                            <Image
                                                src={image}
                                                alt="SDG Images"
                                                width={500}
                                                height={500}
                                                className=""
                                            />
                                        </motion.div>

                                        {/* Content Section */}
                                        <div className="flex flex-1 flex-col justify-center p-8">
                                            <motion.h2
                                                className="text-foreground mb-4 text-2xl font-bold md:text-3xl"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                Goal {number}: {title}
                                            </motion.h2>
                                            <motion.p
                                                className="text-muted-foreground mb-6 leading-relaxed"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {description}
                                            </motion.p>
                                            <motion.div
                                                className="flex items-center gap-4"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                <motion.button
                                                    whileHover={{ scale: 1.05, x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`group/btn flex items-center gap-2 rounded-full ${colorClass} px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
                                                >
                                                    <span>Learn More</span>
                                                    <motion.span
                                                        animate={{ x: [0, 5, 0] }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                        }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </motion.button>
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-colors"
                                                >
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                                        />
                                                    </svg>
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
