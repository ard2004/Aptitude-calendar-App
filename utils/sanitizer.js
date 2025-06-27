export const dateSanitizer = (date) => {
    console.log(`date to sanitize: ${date}`)
    const [year,month,day] = date.split("-") 
    return [year,month,day]
}