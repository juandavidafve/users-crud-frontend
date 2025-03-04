import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_BASE || "/",
    resolve: {
      alias: {
        "@bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      },
    },
    plugins: [react()],
  });
};
