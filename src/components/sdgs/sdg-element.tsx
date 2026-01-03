"use client"

import { Card, CardContent } from "#/components/ui/card"

import { Variants, motion } from "framer-motion"
import Image from "next/image"

interface ISDGElement {
    number: number
    colorClass: string
    title: string
    description: string
    image: string
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
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
}

export default function SDGElement({ number, colorClass, title, description, image }: ISDGElement) {
    return (
        <motion.div key={number} variants={itemVariants}>
            <Card className="group overflow-hidden border-0 shadow-md transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <motion.div
                            className={`relative flex w-full items-center justify-center p-8 md:w-64 ${colorClass}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
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
                                transition={{ delay: 0.1 }}
                            >
                                Goal {number}: {title}
                            </motion.h2>
                            <motion.p
                                className="text-muted-foreground mb-6 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {description}
                            </motion.p>
                            <motion.div
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`group/btn flex items-center gap-2 rounded-full ${colorClass} cursor-pointer px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
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
    )
}
