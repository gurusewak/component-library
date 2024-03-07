/** @type {import('@ladle/react').UserConfig} */
export default {
  addons: {
    a11y: {
      enabled: true,
    },
  },
  // viteConfig: process.cwd() + "/ladle-vite.config.ts",
  hotkeys: {
    search: ["/", "meta+p"],
    nextStory: ["alt+arrowright"],
    previousStory: ["alt+arrowleft"],
    nextComponent: ["alt+arrowdown"],
    previousComponent: ["alt+arrowup"],
    control: ["c"],
    darkMode: ["d"],
    fullscreen: ["f"],
    width: ["w"],
    rtl: ["r"],
    source: ["s"],
    a11y: ["a"],
  },
  viteConfig: process.cwd() + "/vite.config.ladle.ts",
  outDir: "docs",
  port: 3000,
  previewPort: 8080,
  base: "/component-library/"
};
