// // two types of data types in javascript
// // 1. Primitive data types  
// // 2. Reference data types

// // Primitive data types
// let name = "John"; // string
// let age = 30; // number
// let isEmployed = true; // boolean
// let salary = null; // null
// let address; // undefined   
// let symbol = Symbol("unique"); // symbol
// let bigIntValue = BigInt(1234567890123456789012345678901234567890); // bigint

// // Reference data types
// let person = { // object
//     name: "John",
//     age: 30,
//     isEmployed: true
// };

//  let numbers = [1, 2, 3, 4, 5]; // array
// let date = new Date(); // date
// let regex = /ab+c/; // regular expression
// let func = function() { // function
//     console.log("Hello, World!");
// };





// // Example of using the data types
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Employed:", isEmployed);
// console.log("Salary:", salary);
// console.log("Address:", address);
// console.log("Symbol:", symbol);
// console.log("BigInt Value:", bigIntValue);
// console.log("Person Object:", person);
// console.log("Numbers Array:", numbers);
// console.log("Date:", date);
// console.log("Regex:", regex);
// console.log("Function Output:");
// func(); // calling the function
// // Checking types of variables
// console.log("Type of name:", typeof name);
// console.log("Type of age:", typeof age);
// console.log("Type of isEmployed:", typeof isEmployed);
// console.log("Type of salary:", typeof salary);
// console.log("Type of address:", typeof address);
// console.log("Type of symbol:", typeof symbol);
// console.log("Type of bigIntValue:", typeof bigIntValue);
// console.log("Type of person:", typeof person);
// console.log("Type of numbers:", typeof numbers);
// console.log("Type of date:", typeof date);
// console.log("Type of regex:", typeof regex);
// console.log("Type of func:", typeof func);
// // Checking if variables are of specific types
// console.log("Is name a string?", typeof name === "string");
// console.log("Is age a number?", typeof age === "number");
// console.log("Is isEmployed a boolean?", typeof isEmployed === "boolean");
// console.log("Is salary null?", salary === null);
// console.log("Is address undefined?", typeof address === "undefined");
// console.log("Is symbol a symbol?", typeof symbol === "symbol");
// console.log("Is bigIntValue a bigint?", typeof bigIntValue === "bigint");
// console.log("Is person an object?", typeof person === "object");
// console.log("Is numbers an array?", Array.isArray(numbers));
// console.log("Is date a date?", date instanceof Date);
// console.log("Is regex a regular expression?", regex instanceof RegExp);
// // Is func a function?
// console.log("Is func a function?", typeof func === "function");
// // Checking if variables are truthy or falsy

// console.log("Is name truthy?", !!name);
// console.log("Is age truthy?", !!age);

// console.log("Is isEmployed truthy?", !!isEmployed);
// console.log("Is salary truthy?", !!salary);
// console.log("Is address truthy?", !!address);
// console.log("Is symbol truthy?", !!symbol);
// console.log("Is bigIntValue truthy?", !!bigIntValue);
// console.log("Is person truthy?", !!person);
// console.log("Is numbers truthy?", !!numbers);
// console.log("Is date truthy?", !!date);
// console.log("Is regex truthy?", !!regex);
// console.log("Is func truthy?", !!func);
// // Checking if variables are falsy
// console.log("Is name falsy?", !name);
// console.log("Is age falsy?", !age);

// console.log("Is isEmployed falsy?", !isEmployed);

//Stack memory, heap memory, and garbage collection in JavaScript
// Stack memory and heap memory are two types of memory management in JavaScript.
// Stack memory is used for static memory allocation, where variables are stored in a last-in-first-out (LIFO) manner.
// Heap memory is used for dynamic memory allocation, where objects and arrays are stored in a more flexible manner.
// Garbage collection is the process of automatically reclaiming memory that is no longer in use, which helps prevent memory leaks and optimize performance.
// In JavaScript, the garbage collector automatically manages memory by identifying and freeing up memory that is no longer reachable or needed.
// Stack memory is used for primitive data types (like numbers, strings, booleans) and function calls.
// Heap memory is used for reference data types (like objects, arrays, functions).
// The garbage collector runs periodically to clean up memory, ensuring that unused objects are removed and memory is freed up for future use.


// Example of stack memory and heap memory
let stackVar = 10; // Stack memory for primitive type
let heapVar = { // Heap memory for reference type
    name: "John",
    age: 30
};
// Function to demonstrate stack memory
function stackFunction() {
    let localVar = "Hello"; // Stack memory for local variable  
    console.log(localVar);
}
// Function to demonstrate heap memory
function heapFunction() {
    let localObject = { // Heap memory for local object
        message: "World"
    };
    console.log(localObject.message);
}
// Calling the functions
stackFunction(); // Outputs: Hello
heapFunction(); // Outputs: World
// Example of garbage collection    
let obj1 = { name: "Alice" }; // Object in heap memory
let obj2 = obj1; // Reference to the same object
obj1 = null; // Dereference obj1, making it eligible for garbage collection
obj2 = null; // Dereference obj2, making the object eligible for garbage collection
// The garbage collector will automatically reclaim the memory used by the object when there are no references to it
// Example of memory leak
let memoryLeakArray = []; // Array in heap memory
function createMemoryLeak() {
    for (let i = 0; i < 1000000; i++) {
        memoryLeakArray.push({ index: i }); // Continuously adding objects to the array
    }
}




// Strings.
// Strings in JavaScript are immutable sequences of characters.
// They can be created using single quotes, double quotes, or backticks (template literals).
let singleQuoteString = 'Hello, World!'; // Single quotes   
let doubleQuoteString = "Hello, World!"; // Double quotes
let templateLiteralString = `Hello, World!`; // Template literals
// Template literals allow for multi-line strings and string interpolation
let name = "John";
let greeting = `Hello, ${name}!`; // String interpolation
// String methods
console.log(singleQuoteString.length); // Length of the string
console.log(doubleQuoteString.toUpperCase()); // Convert to uppercase
console.log(templateLiteralString.toLowerCase()); // Convert to lowercase
console.log(singleQuoteString.indexOf("World")); // Find index of substring
console.log(doubleQuoteString.slice(0, 5)); // Extract substring
console.log(templateLiteralString.replace("World", "JavaScript")); // Replace substring
console.log(singleQuoteString.split(", ")); // Split string into an array
// String concatenation
let concatenatedString = singleQuoteString + " " + doubleQuoteString; // Using + operator
let concatenatedTemplateLiteral = `${singleQuoteString} ${doubleQuoteString}`; // Using template literals
console.log(concatenatedString); // Outputs: Hello, World! Hello, World!
console.log(concatenatedTemplateLiteral); // Outputs: Hello, World! Hello, World!
// String comparison
console.log(singleQuoteString === doubleQuoteString); // true
console.log(singleQuoteString === templateLiteralString); // true
// String escaping
let escapedString = 'He said, "Hello, World!"'; // Escaping double quotes
let escapedSingleQuoteString = "It's a beautiful day!"; // Escaping single quote
console.log(escapedString); // Outputs: He said, "Hello, World!"
console.log(escapedSingleQuoteString); // Outputs: It's a beautiful day!
// String template literals with expressions
let age = 30;
let personInfo = `My name is ${name} and I am ${age} years old.`; // Using template literals with expressions
console.log(personInfo); // Outputs: My name is John and I am 30 years old.
// String methods with chaining
let modifiedString = singleQuoteString
    .toLowerCase() // Convert to lowercase
    .replace("world", "everyone") // Replace substring
    .trim(); // Remove whitespace from both ends
console.log(modifiedString); // Outputs: hello, everyone!
// String methods with regular expressions
let regexString = "The quick brown fox jumps over the lazy dog.";
let regex = /quick/; // Regular expression to find "quick"

console.log(regex.test(regexString)); // true, checks if "quick" exists in the string
console.log(regexString.match(regex)); // ["quick"], finds the match

console.log(regexString.replace(regex, "slow")); // "The slow brown fox jumps over the lazy dog.", replaces "quick" with "slow"
// String methods with Unicode characters
let unicodeString = "Hello, 🌍!"; // String with Unicode characte
console.log(unicodeString.length); // 10, counts Unicode characters correctly
console.log(unicodeString.charAt(7)); // "🌍", gets the Unicode character at index 
console.log(unicodeString.codePointAt(7)); // 127757, gets the Unicode code point of the character
console.log(unicodeString.normalize()); // Normalizes the string to a standard form     
// String methods with internationalization
let intlString = "Hello, 世界!"; // String with international characters
console.log(intlString.toLocaleUpperCase("zh-CN")); // "HELLO, 世界!", converts to uppercase in Chinese locale
console.log(intlString.toLocaleLowerCase("zh-CN")); // "hello, 世界!", converts to lowercase in Chinese locale
// String methods with search and replace

let searchString = "The rain in Spain stays mainly in the plain.";
let searchRegex = /ain/g; // Global search for "ain"
console.log(searchString.search(searchRegex)); // 5, finds the index of the first occurrence