import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/common": path.resolve(__dirname, "src/common"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/helpers": path.resolve(__dirname, "src/helpers"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/stores": path.resolve(__dirname, "src/stores"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      reporter: ["text", "json", "html"],
      provider: "v8",
    },
  },
});
