// eslint.config.mjs
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig } from "eslint/config"

export default defineConfig([
    // Default config of Next 16 (Web Vitals + Typescript)
    ...nextVitals,
    ...nextTs,

    // Global Ignores (Skip checking files)
    {
        ignores: [
            ".next/**",
            "dist/**",
            "node_modules/**",
            ".turbo/**",
            "out/**",
            "build/**",
            "coverage/**",
        ],
    },

    // Custom rules
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "react/no-unknown-property": ["error", { ignore: ["fetchPriority"] }],

            // Turn off to use Prettier to format files
            indent: "off",
        },
    },
])
