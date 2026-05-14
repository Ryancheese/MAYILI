import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project sites: set BASE_URL in CI, e.g. /repo-name/
const base = process.env.BASE_URL ?? "/";

export default defineConfig({
  plugins: [react()],
  base,
});
