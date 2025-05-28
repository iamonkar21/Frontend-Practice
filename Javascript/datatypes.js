// two types of data types in javascript
// 1. Primitive data types  
// 2. Reference data types

// Primitive data types
let name = "John"; // string
let age = 30; // number
let isEmployed = true; // boolean
let salary = null; // null
let address; // undefined   
let symbol = Symbol("unique"); // symbol
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // bigint

// Reference data types
let person = { // object
    name: "John",
    age: 30,
    isEmployed: true
};

 let numbers = [1, 2, 3, 4, 5]; // array
let date = new Date(); // date
let regex = /ab+c/; // regular expression
let func = function() { // function
    console.log("Hello, World!");
};





// Example of using the data types
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Employed:", isEmployed);
console.log("Salary:", salary);
console.log("Address:", address);
console.log("Symbol:", symbol);
console.log("BigInt Value:", bigIntValue);
console.log("Person Object:", person);
console.log("Numbers Array:", numbers);
console.log("Date:", date);
console.log("Regex:", regex);
console.log("Function Output:");
func(); // calling the function
// Checking types of variables
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isEmployed:", typeof isEmployed);
console.log("Type of salary:", typeof salary);
console.log("Type of address:", typeof address);
console.log("Type of symbol:", typeof symbol);
console.log("Type of bigIntValue:", typeof bigIntValue);
console.log("Type of person:", typeof person);
console.log("Type of numbers:", typeof numbers);
console.log("Type of date:", typeof date);
console.log("Type of regex:", typeof regex);
console.log("Type of func:", typeof func);
// Checking if variables are of specific types
console.log("Is name a string?", typeof name === "string");
console.log("Is age a number?", typeof age === "number");
console.log("Is isEmployed a boolean?", typeof isEmployed === "boolean");
console.log("Is salary null?", salary === null);
console.log("Is address undefined?", typeof address === "undefined");
console.log("Is symbol a symbol?", typeof symbol === "symbol");
console.log("Is bigIntValue a bigint?", typeof bigIntValue === "bigint");
console.log("Is person an object?", typeof person === "object");
console.log("Is numbers an array?", Array.isArray(numbers));
console.log("Is date a date?", date instanceof Date);
console.log("Is regex a regular expression?", regex instanceof RegExp);
// Is func a function?
console.log("Is func a function?", typeof func === "function");
// Checking if variables are truthy or falsy

console.log("Is name truthy?", !!name);
console.log("Is age truthy?", !!age);

console.log("Is isEmployed truthy?", !!isEmployed);
console.log("Is salary truthy?", !!salary);
console.log("Is address truthy?", !!address);
console.log("Is symbol truthy?", !!symbol);
console.log("Is bigIntValue truthy?", !!bigIntValue);
console.log("Is person truthy?", !!person);
console.log("Is numbers truthy?", !!numbers);
console.log("Is date truthy?", !!date);
console.log("Is regex truthy?", !!regex);
console.log("Is func truthy?", !!func);
// Checking if variables are falsy
console.log("Is name falsy?", !name);
console.log("Is age falsy?", !age);

console.log("Is isEmployed falsy?", !isEmployed);