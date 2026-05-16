// Dates in JavaScript

// Creating a date object
const now = new Date();
// console.log(now);

//Creating a date object with a specific date and time
const abhi = new Date(2023, 0, 22, 10, 30, 0); // January 22, 2023 at 10:30:00
const abhi2 = new Date("2023-01-22T10:30:00"); // January 22, 2023 at 10:30:00
// console.log(abhi.toLocaleString());
// console.log(abhi2.toLocaleString());

// Converting a date to a string
// console.log(now.toString()); // Sat May 16 2026 22:38:59 GMT+0530 (India Standard Time)
// console.log(now.toDateString()); // Sat May 16 2026
// console.log(now.toLocaleString()); // 5/16/2026, 10:38:59 PM

const myCreatedDate = new Date("01-16-2026");
// console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1700000000000 (milliseconds since January 1, 1970)
// console.log(myCreatedDate.getTime()); // 1700000000000 (milliseconds since January 1, 1970)

//Getting specific parts of a date
let currentDate = new Date();
console.log(currentDate.getFullYear()); // 2026
console.log(currentDate.getMonth()); // 4 (months are zero-indexed, so January is 0 and December is 11)
console.log(currentDate.getDate()); // 16 (day of the month)
console.log(currentDate.getHours()); // 22 (hours in 24-hour format)
console.log(currentDate.getMinutes()); // 38
console.log(currentDate.getSeconds()); // 59
console.log(currentDate.getMilliseconds()); // 0
console.log(currentDate.getDay()); // 6 (day of the week, where Sunday is 0 and Saturday is 6)

// Setting specific parts of a date
currentDate.setFullYear(2023);
currentDate.setMonth(0); // January
currentDate.setDate(22);
currentDate.setHours(10);
currentDate.setMinutes(30);
currentDate.setSeconds(0);
currentDate.setMilliseconds(0);
console.log(currentDate.toLocaleString()); // 1/22/2023, 10:30:00 AM

//More customization of date and time
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};
console.log(currentDate.toLocaleString("en-US", options)); // Sunday, January 22, 2023, 10:30:00 AM GMT+5:30
