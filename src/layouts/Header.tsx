"use client"

import Navbar from "#/components/header/navbar"
import { Button } from "#/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "#/components/ui/sheet"

import { Globe, Menu, Search } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="border-border bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="font-title text-primary text-2xl font-bold">
                        Youth<span className="text-success">4</span>Change
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <Navbar />

                {/* Actions */}
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Globe className="h-5 w-5" />
                    </Button>
                    <Button asChild className="hidden sm:inline-flex">
                        <Link href="/signup">Join Us</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-75">
                            <nav className="mt-8 flex flex-col space-y-4">
                                <Link
                                    href="/about"
                                    className="hover:text-primary text-lg font-medium"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/projects"
                                    className="hover:text-primary text-lg font-medium"
                                >
                                    SDG Projects
                                </Link>
                                <Link
                                    href="/news"
                                    className="hover:text-primary text-lg font-medium"
                                >
                                    News
                                </Link>
                                <Link
                                    href="/contact"
                                    className="hover:text-primary text-lg font-medium"
                                >
                                    Contact
                                </Link>
                                <Button asChild className="mt-4">
                                    <Link href="/signup">Join Us</Link>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
