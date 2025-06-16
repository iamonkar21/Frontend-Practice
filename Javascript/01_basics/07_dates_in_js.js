//Dates

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString()); // Current date in string format
// console.log(myDate.toISOString()); // Current date in ISO format    
// console.log(typeof myDate); // Object type


//let myCreatedDate = new Date(2025, 0, 24); // January 24, 2025
let myCreatedDate = new Date("01/24/2025"); // January 24, 2025
// console.log(myCreatedDate.toString()); // Specific date and time        
// console.log(myCreatedDate.toDateString()); // Specific date in string format
// console.log(myCreatedDate.toISOString()); // Specific date in ISO format
// // console.log(typeof myCreatedDate); // Object type
// console.log(myCreatedDate.toLocaleString()); // 2025


let myTimeStamp = Date.now(); // Get timestamp in milliseconds
// console.log(myTimeStamp); // Timestamp in milliseconds   
// console.log(myCreatedDate.getTime()); // Timestamp in milliseconds

// console.log(Date.now());    // Current timestamp in milliseconds
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // Get month (0-11)
// console.log(newDate.getFullYear()); // Get full year (4 digits)
// console.log(newDate.getDate()); // Get day of the month (1-31)
// console.log(newDate.getDay()); // Get day of the week (0-6, where 0 is Sunday)
// console.log(newDate.getHours()); // Get hours (0-23)

//'${newDare.getDay()}'

newDate.toLocaleString('default', {
    weekday: 'long', // Full name of the day
    year: 'numeric', // Full year
    month: 'long', // Full name of the month
    day: 'numeric', // Day of the month
    hour: '2-digit', // 2-digit hour
    minute: '2-digit', // 2-digit minute
    second: '2-digit' // 2-digit second
}); // Format date and time in a readable way
   

























































