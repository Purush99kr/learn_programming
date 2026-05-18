//destructuring objects in javascript

const course = {
  courseTitle: "JavaScript Basics",
  courseInstructor: {
    fullName: {
      firstName: "Nikhil",
      lastName: "Kumar",
    },
    email: "user123@gmail.com",
    mobile: 1234567890,
  },
  price: 100,
  duration: "4 weeks",
};

// console.log(course);
// console.log(course.courseTitle);
// console.log(course.courseInstructor);

// Destructuring the courseInstructor object
course.courseTitle; // Output: JavaScript Basics
const { courseTitle: title } = course; // changing name as per our wish
console.log(title); // Output: JavaScript Basics

const {
  fullName: { firstName, lastName },
  email,
  mobile,
} = course.courseInstructor;
console.log(firstName); // Output: Nikhil
console.log(lastName); // Output: Kumar
console.log(email); // Output: user123@gmail.com
console.log(mobile); // Output: 1234567890

//API
// We receive API response in the form of an object, we can use destructuring to extract specific data from the response.
//JSON (JavaScript Object Notation) is a common format for API responses, and it can be easily parsed into JavaScript objects.

//  {
//   "courseTitle": "JavaScript Basics",
//   "courseInstructor": {
//     "fullName": {
//       "firstName": "Nikhil",
//       "lastName": "Kumar",
//     },
//     "email": "user123@gmail.com",
//     "mobile": 1234567890,
//   },
//   "price": 100,
//   "duration": "4 weeks",
// };
