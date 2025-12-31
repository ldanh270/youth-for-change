"use client"

import ActionButtions from "#/components/header/actions"
import Navbar from "#/components/header/navbar"

import Link from "next/link"

export default function Header() {
    return (
        <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex flex-1 items-center space-x-2 md:flex-initial">
                    <div className="font-title text-primary text-2xl font-bold">
                        Youth<span className="text-success">4</span>Change
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <Navbar className="order-3 md:order-0" />

                {/* Actions */}
                <ActionButtions className="hidden md:flex" />
            </div>
        </header>
    )
}
