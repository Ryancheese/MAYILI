import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages: relative base avoids /Repo-case mismatches; CI sets BASE_URL=./
const base = process.env.BASE_URL ?? "./";

export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
