export const numberToMonth = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}
export const numberToOddDays = {
    "1": 3,  // January: 31 % 7 = 3
    "2": 0,  // February: 28 % 7 = 0
    "3": 3,  // March: 31 % 7 = 3
    "4": 2,  // April: 30 % 7 = 2
    "5": 3,  // May: 31 % 7 = 3
    "6": 2,  // June: 30 % 7 = 2
    "7": 3,  // July: 31 % 7 = 3
    "8": 3,  // August: 31 % 7 = 3
    "9": 2,  // September: 30 % 7 = 2
    "10": 3, // October: 31 % 7 = 3
    "11": 2, // November: 30 % 7 = 2
    "12": 3  // December: 31 % 7 = 3
}
export const centuryToOddDays = {
    0: 0,    // 1600, 2000, etc.
    100: 5,  // 1700, 2100, etc.
    200: 3,  // 1800, 2200, etc.
    300: 1   // 1900, 2300, etc.
}
