import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: relative base avoids /Repo-case mismatches; CI sets BASE_URL=./
const base = process.env.BASE_URL ?? "./";

export default defineConfig({
  plugins: [react()],
  base,
});
