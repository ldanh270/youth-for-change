import { type ClassValue, clsx } from "clsx"
import { Locale, format } from "date-fns"
import { vi } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const timeFormatter = ({
    time,
    formatter = "dd/MM/yyyy",
    location = vi,
}: {
    time: string
    formatter?: string
    location?: Locale
}) => {
    return format(time, formatter, {
        locale: location,
    })
}
