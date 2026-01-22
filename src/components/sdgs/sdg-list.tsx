"use client"

import SDGElement from "#/components/sdgs/sdg-element"
import { SDGs } from "#/configs/sdgs"

import { useTranslations } from "next-intl"

export default function SDGList() {
    const t = useTranslations("Core.SDGs")

    return (
        <div className="space-y-6">
            {SDGs.map(({ id, color, image }) => (
                <SDGElement
                    key={id}
                    id={id}
                    color={color}
                    image={image}
                    title={t(`${id}.title`)}
                    description={t(`${id}.description`)}
                    className="animate-fade-in-up"
                />
            ))}
        </div>
    )
}
