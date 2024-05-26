import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [react()],
});
