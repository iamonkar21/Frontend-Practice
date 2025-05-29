// const name = "Onkar"; // String
// const repoCount = 42; // Number

// console.log(name +" " + repoCount); // Concatenation of string and number

// console.log(`Name: ${name}, Repo Count: ${repoCount}`); // Template literal

 

// const person = {
//     name : "Onkar",
//     age: 25,
//     isEmployed: true,
//     salary: null,
//     address: undefined,
// }

// console.log("Person Object:", person);


const name = "Onkar"; // String
// console.log("Name:", name.length);
// console.log("Name in uppercase:", name.toUpperCase());
// console.log("Name in lowercase:", name.toLowerCase());
// console.log("Name starts with 'O':", name.startsWith("O"));
// console.log("Name ends with 'r':", name.endsWith("r"));
// console.log("Name includes 'ka':", name.includes("ka"));
// console.log("Name index of 'k':", name.indexOf("k"));
// console.log("Name last index of 'a':", name.lastIndexOf("a"));
// console.log(name.charAt(2));
// console.log(name.indexOf('r'));

const newName = name.substring(0, 3); // Extracts substring from index 0 to 3
console.log("New Name:", newName);

const anotherName = name.slice(-8, 4); // Extracts substring from index 1 to 4
console.log("Another Name:", anotherName);

const newName2 = name.replace("Onkar", "Onkar Patil"); // Replaces "Onkar" with "Onkar Patil"
console.log("New Name 2:", newName2);

const newName3 = "  Onkar  ";
console.log("Trimmed Name:", newName3.trim()); // Removes whitespace from both endsc

console.log("name" + name);

const url = "https://www.example.com";
console.log("URL:", url.replace("https://", "http://")); // Replaces "https://" with "http://"
console.log("URL:", url.includes('ex')); // Replaces all occurrences of "https://" with "http://"

console.log(url.split("/")); // Splits the URL into an array using "/" as the delimiter