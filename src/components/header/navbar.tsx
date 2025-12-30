import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "#/components/ui/navigation-menu"

import Link from "next/link"

export default function Navbar({ className }: { className?: string }) {
    return (
        <div className={`${className}`}>
            <NavigationMenu>
                <NavigationMenuList>
                    {/* About us */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="cursor-pointer">
                            About Us
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-primary/50 to-primary bg-card flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-none select-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="text-primary-foreground mt-4 mb-2 text-lg font-medium">
                                                Our Mission
                                            </div>
                                            <p className="text-primary-foreground/80 text-sm leading-tight">
                                                Empowering youth to create sustainable change
                                                through SDG initiatives.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/about/vision"
                                            className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                        >
                                            <div className="text-sm leading-none font-medium">
                                                Vision
                                            </div>
                                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                Our vision for a sustainable future
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href="/about/team"
                                            className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                        >
                                            <div className="text-sm leading-none font-medium">
                                                Our Team
                                            </div>
                                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                Meet the passionate individuals
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Projects */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>SDG Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-150 gap-3 p-4 md:grid-cols-3">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <li key={i}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={`/sdg/${i}`}
                                                className="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                            >
                                                <div className="text-sm leading-none font-medium">
                                                    SDG {i}
                                                </div>
                                                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                    Project initiatives
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* News */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/news"
                                className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none"
                            >
                                News
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* Contacts */}
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/contacts"
                                className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none"
                            >
                                Contacts
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
