import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "#/components/ui/navigation-menu"

import Link from "next/link"

type NavElementType = {
    name: string
    link: string
    description?: string
    childs?: NavElementType[]
}

const navElements: NavElementType[] = [
    {
        name: "About Us",
        link: "/about",
        childs: [
            {
                name: "Our Mission",
                link: "/about/mission",
                description:
                    "Empowering youth to create sustainable change through SDG initiatives",
            },
            {
                name: "Vision",
                link: "/about/vision",
                description: "Our vision for a sustainable future",
            },
            {
                name: "Our Team",
                link: "/about/team",
                description: "Meet the passionate individuals",
            },
        ],
    },
    {
        name: "SDG projects",
        link: "/sdg-projects",
        childs: [
            {
                name: "SDG 1",
                link: "/sdg-projects/1",
                description: "Project description",
            },
            {
                name: "SDG 2",
                link: "/sdg-projects/2",
                description: "Project description",
            },
            {
                name: "SDG 3",
                link: "/sdg-projects/3",
                description: "Project description",
            },
            {
                name: "SDG 4",
                link: "/sdg-projects/4",
                description: "Project description",
            },
            {
                name: "SDG 5",
                link: "/sdg-projects/5",
                description: "Project description",
            },
            {
                name: "SDG 6",
                link: "/sdg-projects/6",
                description: "Project description",
            },
            {
                name: "SDG 7",
                link: "/sdg-projects/7",
                description: "Project description",
            },
            {
                name: "SDG 8",
                link: "/sdg-projects/8",
                description: "Project description",
            },
        ],
    },
    { name: "News", link: "/news" },
    { name: "Contacts", link: "/contacts" },
]

export default function Navbar({ className }: { className?: string }) {
    return (
        <div className={`${className}`}>
            <NavigationMenu>
                <NavigationMenuList>
                    {navElements.map(({ name, link, childs }) => {
                        return childs ? (
                            <NavigationMenuItem key={name}>
                                <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-150 gap-3 p-4 md:grid-cols-3">
                                        {childs.map(
                                            ({ name, link, description }: NavElementType) => (
                                                <li key={name}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={`${link}`}
                                                            className="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                                        >
                                                            <div className="text-sm leading-none font-medium">
                                                                {name}
                                                            </div>
                                                            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                                {description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ) : (
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href={link}
                                        className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none"
                                    >
                                        {name}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
