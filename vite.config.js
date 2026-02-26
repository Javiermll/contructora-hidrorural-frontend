import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production" || process.env.CI === "true";
  const isVercel = Boolean(process.env.VERCEL);
  return {
    base: isProd && !isVercel ? "/contructora-hidrorural-frontend/" : "/",
    plugins: [react()],
  };
});
