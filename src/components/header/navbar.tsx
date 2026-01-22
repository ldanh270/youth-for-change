import ActionButtions from "#/components/header/actions"
import { Accordion, AccordionItem, AccordionTrigger } from "#/components/ui/accordion"
import { Button } from "#/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "#/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "#/components/ui/sheet"

import { AccordionContent } from "@radix-ui/react-accordion"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

type NavElementType = {
    key: string
    childs?: NavElementType[]
}

const navElements: NavElementType[] = [
    { key: "sdgs" },
    { key: "blogs" },
    { key: "flipbook" },
    { key: "about" },
]

export default function Navbar({
    className,
    variant = "solid",
}: {
    className?: string
    variant?: "solid" | "transparent"
}) {
    const t = useTranslations("Header.Navbar")

    return (
        <div
            className={`"block ${variant === "transparent" && "invisible opacity-0 group-hover:visible group-hover:opacity-100"} ${className}`}
        >
            {/* Desktop navigation */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    {navElements.map(({ key }) => (
                        <NavigationMenuItem
                            key={key}
                            className="from-primary to-primary group hover:text-accent-foreground relative inline-flex h-10 w-max items-center justify-center rounded-md bg-linear-to-r bg-size-[0%_2px] bg-bottom bg-no-repeat px-4 py-2 pb-1 text-sm font-medium transition-all duration-300 select-none hover:bg-size-[50%_2px] focus:outline-none"
                        >
                            <NavigationMenuLink asChild>
                                <Link href={`/${key}`} className="">
                                    {t(key)}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
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
                        {navElements.map(({ key, childs }) => {
                            return childs ? (
                                <AccordionItem value={key} key={key}>
                                    <AccordionTrigger>{key}</AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="bg-sidebar w-full gap-3 py-4">
                                            {childs.map(({ key }: NavElementType) => (
                                                <li key={key}>
                                                    <Link
                                                        href={`${key}`}
                                                        className="hover:bg-accent hover:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                                                    >
                                                        <div className="text-sm leading-none font-medium">
                                                            {key}
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <AccordionItem value={key} key={key}>
                                    <Link
                                        href={`/${key}`}
                                        className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex w-150 items-center gap-3 rounded-md py-4 text-sm font-medium transition-colors focus:outline-none md:grid-cols-3"
                                    >
                                        {key}
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
