import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import type { UserConfig } from "vite";

export default {
    plugins: [react()],
    base: "",
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    }
} satisfies UserConfig;