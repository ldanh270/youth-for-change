import ActionButtions from "#/components/header/actions"
import { Accordion, AccordionItem, AccordionTrigger } from "#/components/ui/accordion"
import { Button } from "#/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "#/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "#/components/ui/sheet"

import { AccordionContent } from "@radix-ui/react-accordion"
import { Menu } from "lucide-react"
import Link from "next/link"

type NavElementType = {
    name: string
    link: string
    description?: string
    childs?: NavElementType[]
}

const navElements: NavElementType[] = [
    {
        name: "SDGs",
        link: "/sdgs",
        childs: [
            {
                name: "SDG 1",
                link: "/sdgs/1",
                description: "No Poverty",
            },
            {
                name: "SDG 2",
                link: "/sdgs/2",
                description: "Zero Hunger",
            },
            {
                name: "SDG 3",
                link: "/sdgs/3",
                description: "Good Health and Well-Being",
            },
            {
                name: "SDG 4",
                link: "/sdgs/4",
                description: "Quality Education",
            },
            {
                name: "SDG 5",
                link: "/sdgs/5",
                description: "Gender Equality",
            },
            {
                name: "SDG 6",
                link: "/sdgs/6",
                description: "Clean Water and Sanitation",
            },
            {
                name: "SDG 7",
                link: "/sdgs/7",
                description: "Affordable and Clean Energy",
            },
            {
                name: "SDG 8",
                link: "/sdgs/8",
                description: "Decent Work and Economic Growth",
            },
            {
                name: "SDG 9",
                link: "/sdgs/9",
                description: "Industry, Innovation and Infrastructure",
            },
            {
                name: "SDG 10",
                link: "/sdgs/10",
                description: "Reduced Inequality",
            },
            {
                name: "SDG 11",
                link: "/sdgs/11",
                description: "Sustainable Cities and Communities",
            },
            {
                name: "SDG 12",
                link: "/sdgs/12",
                description: "Responsible Consumption and Production",
            },
            {
                name: "SDG 13",
                link: "/sdgs/13",
                description: "Climate Action",
            },
            {
                name: "SDG 14",
                link: "/sdgs/14",
                description: "Life Below Water",
            },
            {
                name: "SDG 15",
                link: "/sdgs/15",
                description: "Life on Land",
            },
            {
                name: "SDG 16",
                link: "/sdgs/16",
                description: "Peace, Justice and Strong Institutions",
            },
            {
                name: "SDG 17",
                link: "/sdgs/17",
                description: "Partnerships for the Goals",
            },
        ],
    },
    { name: "Blogs", link: "/blogs" },
    { name: "Flipbook", link: "/flipbook" },
    {
        name: "About Us",
        link: "/abouts",
    },
]

export default function Navbar({ className }: { className?: string }) {
    return (
        <div className={`${className}`}>
            {/* Desktop navigation */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    {navElements.map(({ name, link, childs }) => {
                        return childs ? (
                            <NavigationMenuItem key={name}>
                                <NavigationMenuTrigger>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link}
                                            className="from-primary to-primary group relative inline-flex h-10 w-max items-center justify-center rounded-md bg-linear-to-r bg-size-[0%_2px] bg-bottom bg-no-repeat py-2 pb-1 text-sm font-medium transition-all duration-300 select-none hover:bg-size-[50%_2px] focus:outline-none"
                                        >
                                            {name}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-150 gap-3 p-4 lg:grid-cols-3">
                                        {childs.map(
                                            ({ name, link, description }: NavElementType) => (
                                                <li key={name}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={`${link}`}
                                                            className="hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
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
                            <NavigationMenuItem
                                key={name}
                                className="from-primary to-primary group hover:text-accent-foreground relative inline-flex h-10 w-max items-center justify-center rounded-md bg-linear-to-r bg-size-[0%_2px] bg-bottom bg-no-repeat px-4 py-2 pb-1 text-sm font-medium transition-all duration-300 select-none hover:bg-size-[50%_2px] focus:outline-none"
                            >
                                <NavigationMenuLink asChild>
                                    <Link href={link} className="">
                                        {name}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile menu */}
            <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="flex h-full w-full flex-col justify-between pt-5 lg:hidden"
                >
                    <SheetTitle className="hidden" />
                    <Accordion type="single" collapsible className="pt-5">
                        {navElements.map(({ name, link, childs }) => {
                            return childs ? (
                                <AccordionItem value={name} key={name}>
                                    <AccordionTrigger>{name}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="bg-sidebar w-full gap-3 py-4">
                                            {childs.map(
                                                ({ name, link, description }: NavElementType) => (
                                                    <li key={name}>
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
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <AccordionItem value={name} key={name}>
                                    <Link
                                        href={link}
                                        className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex w-150 items-center gap-3 rounded-md py-4 text-sm font-medium transition-colors focus:outline-none md:grid-cols-3"
                                    >
                                        {name}
                                    </Link>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                    <ActionButtions className="ml-auto" />
                </SheetContent>
            </Sheet>
        </div>
    )
}
