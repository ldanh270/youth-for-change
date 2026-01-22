import { routing } from "#/i18n/routing"

import { createNavigation } from "next-intl/navigation"

// Create "smart" copies of Next.js hooks
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
