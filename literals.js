import { dirname } from "path";
import { fileURLToPath } from "url";
export const appDir = dirname(fileURLToPath(import.meta.url)) // creating __dirname. You have to create __dirname in the ES type files