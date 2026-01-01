import ActionButtions from "#/components/header/actions"
import Navbar from "#/components/header/navbar"
import { cn } from "#/lib/utils"

import Link from "next/link"

export default function Header({
    variant,
    className,
}: {
    variant?: "solid" | "transparent"
    className?: string
}) {
    return (
        <header
            className={cn(
                "bg-background absolute top-0 z-40 w-full",
                variant === "solid" ? "bg-background" : "text-foreground not-hover:bg-transparent",
                className,
            )}
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex flex-1 items-center space-x-2 lg:flex-initial">
                    <div className="font-title text-primary text-2xl font-bold">
                        Youth<span className="text-success">4</span>Change
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <Navbar className="order-3 md:order-0" />

                {/* Actions */}
                <ActionButtions className="hidden lg:flex" />
            </div>
        </header>
    )
}
