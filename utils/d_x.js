import { logRequestBody } from "./logger.js"

export const d_x = (day) => {
    console.log(`d(x): ${day}`)
   try { 
        console.log(`d(x) = ${day%7}`)
        return day%7
    } catch (e) {
        console.log(`Error at d_x.js`)
        logRequestBody(e,"Error of d_x.js")
    }
}