
import { appDir } from "./literals.js";
import express from "express"

export const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`LISTENING at http://127.0.0.1:${PORT}`)
})
