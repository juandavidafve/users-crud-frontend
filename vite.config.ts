import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/users-crud-frontend/",
  resolve: {
    alias: {
      "@bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [react()],
});
