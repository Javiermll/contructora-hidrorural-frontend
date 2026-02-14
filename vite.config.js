import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === "production" || process.env.CI === "true";
  return {
    base: isProd ? "/contructora-hidrorural-frontend/" : "/",
    plugins: [react()],
  };
});
