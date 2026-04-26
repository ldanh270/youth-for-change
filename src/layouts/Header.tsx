import ActionButtions from "#/components/header/actions"
import Navbar from "#/components/header/navbar"
import { cn } from "#/libs/utils"

import Image from "next/image"
import Link from "next/link"

export default function Header({
    variant = "solid",
    className,
}: {
    variant?: "solid" | "transparent"
    className?: string
}) {
    return (
        <header
            className={cn(
                "group z-40 w-full transition-all duration-300",
                !className?.includes("fixed") && !className?.includes("static") && "absolute top-0",
                variant === "solid" ? "bg-background text-foreground" : "bg-transparent text-foreground hover:bg-background",
                className,
            )}
        >
            <div className="container mx-auto flex h-20 items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex flex-1 items-center space-x-2 lg:flex-initial">
                    <Image src={"/logo.png"} alt="Logo image" width={60} height={60} />
                    <div className="font-title from-sdg-6 to-sdg-3 flex flex-col bg-linear-to-b bg-clip-text text-sm font-bold text-transparent">
                        <span>Youth</span>
                        <span>For</span>
                        <span>Change</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <Navbar className="order-3 md:order-0" variant={variant} />

                {/* Actions */}
                <ActionButtions className="hidden lg:flex" variant={variant} />
            </div>
        </header>
    )
}
