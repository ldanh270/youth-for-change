"use client"

import { Button } from "#/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "#/components/ui/dialog"
import { LANGUAGES } from "#/configs/language"
import { cn } from "#/libs/utils"

import { useState, useTransition } from "react"

import { Check, Globe } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition()
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const currentLocale = useLocale()
    const pathname = usePathname()

    const t = useTranslations("Language")

    const onSelectChange = (language: string) => {
        const nextLocale = language
        startTransition(() => {
            // Replace the current locale in the pathname
            const newPath = `/${nextLocale}${pathname.replace(`/${currentLocale}`, "")}`
            router.replace(newPath)
            setOpen(false) // Close modal on selection
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Globe className="hover:text-primary h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Toogle language</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="gap-6 sm:max-w-106.25">
                <DialogHeader>
                    <div className="flex items-center gap-2">
                        <DialogTitle className="text-2xl">{t("Title")}</DialogTitle>
                    </div>
                    <DialogDescription>{t("Description")}</DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {LANGUAGES.map((lang) => {
                        const isActive = currentLocale === lang.code

                        return (
                            <button
                                key={lang.code}
                                onClick={() => onSelectChange(lang.code)}
                                disabled={isPending}
                                className={cn(
                                    "hover:bg-accent hover:text-accent-foreground ring-offset-background focus-visible:ring-ring relative flex flex-col items-start gap-1 rounded-xl border p-4 text-left text-sm transition-all outline-none focus-visible:ring-2",
                                    isActive ? "border-primary bg-primary/5 shadow-sm" : "bg-card",
                                )}
                            >
                                <div className="flex w-full items-center justify-between">
                                    <span className="text-base font-semibold">{lang.label}</span>
                                    {isActive && (
                                        <span className="bg-primary text-primary-foreground flex h-5 w-5 items-center justify-center rounded-full">
                                            <Check className="h-3 w-3" />
                                        </span>
                                    )}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}
