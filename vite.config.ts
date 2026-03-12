import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function figmaAssetPlugin() {
  return {
    name: "figma-asset-plugin",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        return "\0" + id;
      }
    },
    load(id: string) {
      if (id.startsWith("\0figma:asset/")) {
        const filename = id.replace("\0figma:asset/", "");
        const filePath = path.resolve(__dirname, "src/assets", filename);

        if (fs.existsSync(filePath)) {
          // emit the asset file instead of inlining
          const source = fs.readFileSync(filePath);
          const refId = this.emitFile({
            type: "asset",
            name: filename,
            source,
          });
          return `export default import.meta.ROLLUP_FILE_URL_${refId}`;
        } else {
          // fallback: tiny transparent PNG
          return `export default "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQ" +
                 "ImWNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="`;
        }
      }
    },
  };
}

export default defineConfig({
  base: '/2026_Design_Portfolio/',
  plugins: [react(), figmaAssetPlugin()],
});