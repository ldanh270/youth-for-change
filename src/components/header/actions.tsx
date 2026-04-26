import { ModeToggle } from "#/components/themes/mode-toggle"
import { LanguageSwitcher } from "#/components/translations/LanguageSwitcher"
import { Button } from "#/components/ui/button"
import { cn } from "#/libs/utils"

import { Globe, Search } from "lucide-react"
import Link from "next/link"

export default function ActionButtions({
    className,
    variant,
}: {
    className?: string
    variant?: "solid" | "transparent"
}) {
    return (
        <div
            className={cn(
                "items-center space-x-2 flex transition-all duration-300",
                variant === "transparent" 
                    ? "opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto" 
                    : "opacity-100 translate-y-0",
                className
            )}
        >
            {/* Search */}
            {/* <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
            </Button> */}

            {/* Theme */}
            <ModeToggle />

            {/* Language */}
            <LanguageSwitcher />

            {/* Join */}
            {/* <Button asChild className="hidden md:inline-flex">
                <Link href="#">Join Us</Link>
            </Button> */}
        </div>
    )
}
