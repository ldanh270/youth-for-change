import ActionButtions from "#/components/header/actions"
import Navbar from "#/components/header/navbar"
import { cn } from "#/lib/utils"

import Link from "next/link"

export default function Header({ variant = "default" }: { variant?: "default" | "hero" }) {
    return (
        <header
            className={cn(
                "hover:bg-background absolute top-0 z-50 w-full bg-transparent",
                variant === "hero" ? "not-hover:text-background" : "text-foreground",
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
