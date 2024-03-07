const TypeDoc = require("typedoc");
const path = require("path");
const fs = require("fs").promises;

async function main() {
  const baseDir = "src/components";
  const outputDir = "src/type-schemas";

  // Recursively find all type.ts files in the component directory
  const typeFiles = await findTypeFiles(baseDir);
  for (const typeFile of typeFiles) {
    const relativePath = path.relative(baseDir, typeFile);
    const componentName = path.dirname(relativePath);

    // Generate JSON for each component
    const app = await TypeDoc.Application.bootstrapWithPlugins({
      readme: "none",
      exclude: "**/node_modules/**",
      includes:"**/src/components/*/type.ts",
      entryPoints: [typeFile],
    });

    const project = await app.convert();
    if (project) {
      const componentOutputDir = path.join(outputDir, componentName);
      const jsonOutput = path.join(componentOutputDir, "type.json");
      
      // Check if the JSON file already exists
      if (await fileExists(jsonOutput)) {
        console.log(`Skipping ${jsonOutput} - File already exists.`);
        continue;
      }

      // Ensure the output directory exists
      await fs.mkdir(componentOutputDir, { recursive: true });

      // Generate JSON output for the component
      await app.generateJson(project, jsonOutput);
    }
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    } else {
      throw error;
    }
  }
}

async function findTypeFiles(directory) {
  const typeFiles = [];

  async function traverse(dir) {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stats = await fs.stat(fullPath);

      if (stats.isDirectory()) {
        await traverse(fullPath);
      } else if (file === "type.ts") {
        typeFiles.push(fullPath);
      }
    }
  }

  await traverse(directory);
  return typeFiles;
}

main().catch(console.error);
