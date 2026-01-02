import { ModeToggle } from "#/components/themes/mode-toggle"
import { Button } from "#/components/ui/button"

import { Globe, Search } from "lucide-react"
import Link from "next/link"

export default function ActionButtions({ className }: { className?: string }) {
    return (
        <div className={`items-center space-x-2 ${className}`}>
            {/* Search */}
            <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
            </Button>

            {/* Theme */}
            <ModeToggle />

            {/* Language */}
            <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
            </Button>

            {/* Join */}
            <Button asChild className="hidden md:inline-flex">
                <Link href="/signup">Join Us</Link>
            </Button>
        </div>
    )
}
