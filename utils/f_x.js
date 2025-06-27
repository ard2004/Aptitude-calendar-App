import { logRequestBody } from "./logger.js"
import { centuryToOddDays } from "./table.js"
export const f_x = (yearData) => {
    console.log(`f(x): ${yearData}`)
    let year = parseInt(yearData)
    try {
        //calculate century
        const extractCentury = Math.floor(year / 100) * 100
        console.log(`extractCentury: ${extractCentury}`)
        const extractDecade = year % 100
        console.log(`extractDecade: ${extractDecade}`)
        const centuryKey = ((extractCentury % 400) + 400) % 400; // ensures positive modulus
        const centuryOddDays = centuryToOddDays[centuryKey];
        console.log(`centuryOddDays: ${centuryOddDays}`);
        const leapYear = Math.floor(extractDecade / 4);
        console.log(`leapYear: ${leapYear}`);
        const normalYear = extractDecade - leapYear;
        console.log(`normalYear: ${normalYear}`);
        const oddDays = (centuryOddDays + normalYear + leapYear*2) % 7;
        console.log(`f(x) = ${oddDays}`)
        return oddDays
    } catch (e) {
        console.log(`Error at f(x).js`)
        logRequestBody(e, "Error of f_x.js")
    }

}