// tailwind.config.js

import { heroui } from "@heroui/react";
import { Config } from "tailwindcss";

export default {
    content: [
        "./*.{tsx,html}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {}
    },
    darkMode: "class",
    plugins: [heroui()]
} satisfies Config;