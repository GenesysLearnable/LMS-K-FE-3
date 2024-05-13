import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({ base: "/lms-k-fe-3", plugins: [react()] });
