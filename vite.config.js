import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
    },
  },
  server: {
    port: 5500,
  },
};
