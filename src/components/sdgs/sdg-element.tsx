"use client"

import { Card, CardContent } from "#/components/ui/card"

import { useTranslations } from "next-intl"
import Image from "next/image"

interface ISDGElement {
    id: number
    color: string
    title: string
    description: string
    image: string
    className: string
}

export default function SDGElement({
    id,
    color,
    title,
    description,
    image,
    className,
}: ISDGElement) {
    const t = useTranslations("Core")

    return (
        <div key={id} className={`${className}`}>
            {/* SDG Detail Card */}
            <Card className="group overflow-hidden border-0 shadow-md transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div
                            className={`relative flex w-full items-center justify-center p-8 md:w-64 bg-${color}`}
                        >
                            <Image src={image} alt="SDG Images" width={600} height={600} />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-1 flex-col justify-center p-8">
                            <h2 className={`text-foreground mb-4 text-2xl font-bold md:text-3xl`}>
                                {t("Goal")} {id}: {title}
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {description}
                            </p>
                            <div className="flex items-center gap-4">
                                <button
                                    className={`group/btn flex items-center gap-2 rounded-full bg-${color} cursor-pointer px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl`}
                                >
                                    <span>{t("learnMore")}</span>
                                    <span className="pl-px">→</span>
                                </button>
                                <div className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-colors">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
