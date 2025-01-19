import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import type { UserConfig } from "vite";

export default {
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    }
} satisfies UserConfig;