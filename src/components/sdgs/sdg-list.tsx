"use client"

import SDGElement from "#/components/sdgs/sdg-element"
import { SDGs } from "#/configs/sdgs"

export default function SDGList() {
    return (
        <div className="space-y-6">
            {SDGs.map(({ id, color, title, description, image }) => (
                <SDGElement
                    key={id}
                    id={id}
                    title={title}
                    color={color}
                    description={description}
                    image={image}
                    className="animate-fade-in-up"
                />
            ))}
        </div>
    )
}
