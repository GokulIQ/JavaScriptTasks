//Print your name and designation in the console.

console.log("Gokul Software Developer");

//Show an alert saying "Welcome to JavaScript Session

alert("Welcome to JavaScript Session");

// Ask the user: "Do you like coding?" using confirm() and print the result.

let userResponse = confirm("Do you like coding?");
console.log("User response: " + userResponse);

// Take user input for favorite food using prompt() and print it.

let favoriteFood = prompt("What is your favorite food?");
console.log("Your favorite food is: " + favoriteFood);

// Display "Good Evening Team" on the UI using document.writeln().

document.writeln("Good Evening Team");

// Print a number using console.log().

console.log(42);    

// Print a warning message: "This is a warning".

console.warn("This is a warning");

// Print an error message: "Something went wrong!".

console.error("Something went wrong!");

// Clear the console after printing 3 messages.

console.log("Message 1");
console.log("Message 2");
console.log("Message 3");
console.clear();

// Create a variable with your name and print its type.

let name = "Gokul";
console.log("Name: " + name);
console.log("Type of name: " + typeof name);

// Store your age and print the datatype.

let age = 30;
console.log("Age: " + age);
console.log("Type of age: " + typeof age);

// Store a boolean value (true/false) and print it.

let Student = true;
console.log("student: " + Student);

// Declare a variable without value and print it.

let undefinedVariable;
console.log("Undefined variable: " + undefinedVariable);

// Assign null to a variable and print it.

let nullVariable = null;
console.log("Null variable: " + nullVariable);

// Create an array of 5 fruits and print it

let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Fruits array: " + fruits);

// Print the first and last element of the array

console.log("First fruit: " + fruits[0]);
console.log("Last fruit: " + fruits[fruits.length - 1]);

// Add one more fruit dynamically and print updated array.

fruits.push("Fig");
console.log("Updated fruits array: " + fruits);

// Remove the last element and print array

fruits.pop();
console.log("After removing last fruit: " + fruits);

// Find the length of the array.

console.log("Length of fruits array: " + fruits.length);

// Create an object for a student (name, age, course).

let student = {
    name: "Gokul",
    age: 30,
    course: "Software Development"
};
console.log("Student object: ", student);

// Print the student name.

    console.log("Student name: " + student.name);

// Add a new property (college) dynamically.

student.college = "ABC University";
console.log("Updated student object: ", student);

// Access nested array inside object (like your fruit example).

student.favorites = {
    fruits: ["Apple", "Banana", "Cherry"]
};
console.log("Student's favorite fruits: ", student.favorites.fruits);

// Update a property value.

student.age = 31;
console.log("Updated student age: " + student.age);

// Add two numbers and print result.

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Sum of " + num1 + " and " + num2 + " is: " + sum);

// Subtract two numbers

let difference = num1 - num2;
console.log("Difference of " + num1 + " and " + num2 + " is: " + difference);


// Multiply two numbers

let product = num1 * num2;
console.log("Product of " + num1 + " and " + num2 + " is: " + product);

// Divide two numbers

let quotient = num1 / num2;
console.log("Quotient of " + num1 + " and " + num2 + " is: " + quotient);

// Find remainder using %

let remainder = num1 % num2;
console.log("Remainder of " + num1 + " and " + num2 + " is: " + remainder);

// Use exponent operator (**) to find power.

let power = num1 ** num2;
console.log("Power of " + num1 + " and " + num2 + " is: " + power); 

// Create a variable and use post increment.

let count = 5;
console.log("Count before post increment: " + count);
console.log("Post increment value: " + count++);
console.log("Count after post increment: " + count);

// Create a variable and use pre increment.

let preCount = 5;
console.log("Pre count before pre increment: " + preCount);
console.log("Pre increment value: " + ++preCount);
console.log("Pre count after pre increment: " + preCount);

// Show difference between num++ and ++num.

let a = 5;
console.log("Value of a: " + a);
console.log("Using a++: " + a++);
console.log("Value of a after a++: " + a);

// Use decrement operator and print values.

let b = 5;
console.log("Value of b: " + b);
console.log("Using b--: " + b--);
console.log("Value of b after b--: " + b);

// Predict output before running (important logic task 👇)
let a = 5;
let b = a++;
let c = ++a;

console.log(a); // 7
console.log(b); // 5
console.log(c); // 7

// Ask user age and check if eligible to vote.

let userAge = prompt("Enter your age:");
if (userAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Ask user name and greet: "Hello Naveen"

let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// Store marks in array and print highest value.

let marks = [85, 92, 78, 96, 88];
let highestMark = Math.max(...marks);
console.log("Highest mark: " + highestMark);

// Create object for fruits category (like your example) and access values.

let fruitCategory = {
    citrus: ["Orange", "Lemon", "Lime"],
    berries: ["Strawberry", "Blueberry", "Raspberry"],
};
console.log("Citrus fruits: ", fruitCategory.citrus);
console.log("Berry fruits: ", fruitCategory.berries);

// Combine prompt + array:
// Ask user to enter 3 favorite fruits
// Store in array
// Print them

let userFruits = [];
for (let i = 0; i < 3; i++) {
    let fruit = prompt("Enter your favorite fruit:");
    userFruits.push(fruit);
}
console.log("Your favorite fruits: ", userFruits);


