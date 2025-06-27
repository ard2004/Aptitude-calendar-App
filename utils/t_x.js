import { numberToOddDays } from "./table.js"
import { logRequestBody } from "./logger.js"
export const t_x = (month) => {
    console.log(`t(x): ${month}`)
    let sigmaTx = 0;
    try {
        for (let i = 1; i < parseInt(month); i++){
            console.log(numberToOddDays[i])
            sigmaTx += numberToOddDays[i]
        }
        console.log(`t(x) = ${sigmaTx}`)
        return sigmaTx
    } catch (e) {
        console.log(`Error at t(x).js`)
        // let error = e+`${numberToOddDays[int(i)]}`
        logRequestBody(e, "\n===Error of t(x).js===\n")
    }
}