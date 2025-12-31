import type { Config } from "tailwindcss"

const config: Config = {
    // Using tailwind classes (bg-primary, font-title, ..) in files
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],

    theme: { extend: {} },
    plugins: [],
}
export default config
