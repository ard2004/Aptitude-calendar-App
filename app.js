import { appDir } from "./literals.js";
import express from "express"
import { logRequestBody } from "./utils/logger.js";
const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(`${appDir}/view/index.html`)
    // res.sendStatus(200)
})
app.post("/submit", (req, res) => {
    try {
        logRequestBody(req,"\n===form-data:date===\n")
        res.sendStatus(200)
    } catch (e) {
        console.error(e)
        res.sendStatus(200)
    }
})
app.listen(PORT, () => {
    console.log(`LISTENING at http://127.0.0.1:${PORT}`)
})