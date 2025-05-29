 const score = 100;
// console.log(`Score is:  ${score}`);

 const balance = new Number(100);
// console.log(`Balance is: ${balance}`);
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length); // Converts Number object to string
// console.log(balance.toFixed(2)); // Formats the number to 2 decimal places
// console.log(balance.toPrecision(4)); // Formats the number to 4 significant digits
// console.log(balance.toExponential(2)); // Formats the number in exponential notation with 2 decimal places

// console.log(balance.valueOf()); // Returns the primitive value of the Number object



 const otherBalance = 100.123456789;
// console.log(`Other Balance is: ${otherBalance}`);   
// console.log(otherBalance.toFixed(2)); // Formats the number to 2 decimal places
// console.log(otherBalance.toPrecision(4)); // Formats the number to 4 significant digits
// console.log(otherBalance.toExponential(2)); // Formats the number in exponential notation with 2 decimal places

 const hundred = 1000000;
// console.log(`Hundred is: ${hundred}`);
// console.log(hundred.toLocaleString()); // Formats the number with locale-specific separators
// console.log(hundred.toLocaleString('en-IN')); // Formats the number in US locale

  //++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++

//   console.log(Math);
// // console.log(Math.PI); // Returns the value of PI
// console.log(Math.abs(-4)); 
// // Returns the absolute value of -4
// console.log(Math.round(4.7));
// // Returns the value of 4.7 rounded to the nearest integer
// console.log(Math.ceil(4.1));
// // Returns the smallest integer greater than or equal to 4.1
// console.log(Math.floor(4.9));
// // Returns the largest integer less than or equal to 4.9    
// console.log(Math.min(1, 2, 3, 4, 5));
// // Returns the minimum value among the given numbers
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.random());
// // Returns a random number between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random() * 10); // Returns a random number between 0 and 10
// console.log(Math.floor(Math.random() * 10)); // Returns a random integer between 0 and 9

// console.log(Math.pow(2, 3)); 
// // Returns 2 raised to the power of 3
// console.log(Math.sqrt(16)); // Returns the square root of 16
// console.log(Math.log(10)); // Returns the natural logarithm (base e) of 10
// console.log(Math.log10(100)); // Returns the base 10 logarithm of 100
// console.log(Math.sin(Math.PI / 2)); // Returns the sine of PI/2 radians
// console.log(Math.cos(Math.PI)); // Returns the cosine of PI radians
// console.log(Math.tan(Math.PI / 4)); // Returns the tangent of PI/4 radians
// console.log(Math.asin(1)); // Returns the arcsine of 1 in radians
// console.log(Math.acos(0)); // Returns the arccosine of 0 in radians


console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log((Math.random()*10) + 1); 
// Returns a random number between 0 (inclusive) and 1 (exclusive)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Returns a random integer between min (inclusive) and max (inclusive)