import { d_x } from "../utils/d_x.js";
import { f_x } from "../utils/f_x.js";
import { logRequestBody } from "../utils/logger.js";
import { dateSanitizer } from "../utils/sanitizer.js";
import { t_x } from "../utils/t_x.js";
import { numberToDay } from "../utils/table.js";
export const dateOP = (req,res) =>{
    logRequestBody(req,"form-date")
    try{
        console.log(`dateOP on  ${req.body["date"]}`)
        const finalOp = pipeline(req.body["date"])
        const ultraFinalOp = numberToDay[parseInt(finalOp)]
        res.send(`<h1>The day is: ${ultraFinalOp}`)
    } catch (e) {
        console.log("Error at DateOP.js",e)
        res.sendStatus(500)
    }
    
}

const pipeline = (date) => {
    const dateData = dateSanitizer(date)
    console.log(`sanitization: ${dateData}`)
    const sigmaOddDays = f_x(dateData[0]) + t_x(dateData[1]) + d_x(dateData[2])
    return sigmaOddDays // a(x)
}
