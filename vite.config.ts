//vite.config.js
import react from "@vitejs/plugin-react-swc";
import path, { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, dependencies } from './package.json';
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.ts`,
    },
    rollupOptions: {
      external: (source) => {
        // If the source starts with '@', it's an alias and should not be external
        if (source.startsWith('@')) {
          return false;
        }
        // Check if the source is listed in peerDependencies or dependencies
        const allDeps = [...Object.keys(peerDependencies), ...Object.keys(dependencies)];
        return allDeps.includes(source);
      },
      output: {
        preserveModules: true,
        exports: 'named',
      },
    },
    target: 'esnext',
    sourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@assets": path.resolve(__dirname, "src/assets")
    }
  }
});