// Task 1: Create and Access Object Properties
// Problem:
//  Create an object named car with properties:
//  brand, model, year, and color.
//  Display each property value in the console.

// Done By Myself
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue"
// };
// for(let key in car){
//     console.log(car[key])
// }

// Done By Myself
// Task 2: Add, Update, and Delete Properties
// Problem:
//  Create an object person with name and age.
// Add a new property country.
// Update the age.

// let person ={
//     name : "Jabakumar",
//     Age:21,
// }
// person.country="India"
// person.Age=26;
// delete person.name
// console.log(person)


// 3. Create the calculator object
// Done By Myself

// const calculator = {
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract: function(a, b) {
//     return a - b;
//   },
//   multiply: function(a, b) {
//     return a * b;
//   }
// };
// console.log(calculator.add(4, 2));      // 6
// console.log(calculator.subtract(4, 2)); // 2
// console.log(calculator.multiply(4, 2)); // 8


// Task 4: Nested Object Access
// Problem:
//  Create an object student with nested details:

// Done By Myself

// const student = {
//   name: "Anu",
//   grade: "A",
//   marks: {math: 90,english: 88,science: 92}
// };
// console.log(`Student Name : ${student['name']}`)
// console.log(`Math Mark : ${student.marks.math}`)
// console.log(`Science Mark : ${student.marks.science}`)

// Task 5: Loop Through Object and Count Properties
// Problem:
//  Write a program to count how many properties are inside an object

// Done By Myself

// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD",
// };
// console.log(`Property Count : ${Object.keys(laptop).length}`)

// Task 6: Shallow Copy vs Deep Copy
// Problem:
//  You have the following object:

// Done By Myself

// const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };
// // Shallow Copy:
// let shallow=Object.assign({},student)
// shallow.marks.math=100
// console.log("Original Students :",student)
// console.log("Copied Students :",shallow)
// EXPLANATION :In this program that we assign the student to shallow when we make the changes in shallow it replicates in the student that this is the example of the shallow copy.

// Task 7: Merge Multiple Objects
// Problem:
//  Combine the following objects into one single object:

// Done By Myself

// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };
// const obj4 = { ...obj1, ...obj2, ...obj3 }
// console.log(Object.assign({}, obj4));

// Task 8: Freeze and Modify
// Problem:
//  Create an object and make it immutable using Object.freeze().

// Done By Myself

// const person = {
//   name: "Alice",
//   age: 25
// };
// console.log("Original object:", person);
// Object.freeze(person);
// person.age = 30;
// person.city = "New York";
// delete person.name;
// console.log("After modifications:", person);
// console.log("No change occurs because object is frozen")

// Task 9: Object Destructuring
// Problem:
//  Use destructuring to extract values from this object and rename them:

// Done By Myself

// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };
// const{
//     name:username,
//     age:userage,
//     address:{city,country}
// }=user;
// console.log(`Name : ${username}`)
// console.log(`Age : ${userage}`)
// console.log(`City : ${city}`)
// console.log(`Country : ${country}`)


// Task 10: Count Nested Object Properties
// Problem:
//  Write a function countProperties(obj) that counts all properties in a nested object (including nested levels).

// Done By Myself

// const person = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" }
//   }
// };
// function countKeys(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//     if (typeof obj[key] === "object") {
//       count += countKeys(obj[key]);
//     }
//   }
//   return count;
// }
// console.log("Total Properties:", countKeys(person));