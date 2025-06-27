// import express from "express"
import { appDir } from "./literals.js";
import { app } from "./app.js"

import { dateOP } from "./controller/DateOP.js";
app.get("/", (req, res) => {
    res.sendFile(`${appDir}/view/index.html`)
    // res.sendStatus(200)
})
// app.post("/submit", (req, res) => {
//     try {
//         logRequestBody(req,"\n===form-data:date===\n")
//         res.sendStatus(200)
//     } catch (e) {
//         console.error(e)
//         res.sendStatus(200)
//     }
// })
app.post("/submit",dateOP)