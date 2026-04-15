// Task 1: E-commerce Cart Total

// Cart data
let cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 300, qty: 3 }
];

// 1. Calculate total price using reduce
let totalPrice = cart.reduce((total, item) => {
  return total + (item.price * item.qty);
}, 0);

console.log("Total Price:", totalPrice);

// 2️. Print products with price above 1000 using filter
let expensiveProducts = cart.filter(item => item.price > 1000);

console.log("Products above 1000:", expensiveProducts);

// 3️. Get all product names in uppercase using map
let upperCaseNames = cart.map(item => item.name.toUpperCase());

console.log("Product Names in Uppercase:", upperCaseNames);


// Task 2: Student Result System

// Student data
let students = [
  { name: "Arun", marks: 85 },
  { name: "Bala", marks: 45 },
  { name: "Charan", marks: 60 },
  { name: "Divya", marks: 30 }
];

// 1️.Find failed students (marks < 50)
let failedStudents = students.filter(student => student.marks < 50);
console.log("Failed Students:", failedStudents);

// 2️. Check if any student got distinction (>80) using some
let hasDistinction = students.some(student => student.marks > 80);
console.log("Any Distinction:", hasDistinction);

// 3️. Check if all students passed (>35) using every
let allPassed = students.every(student => student.marks > 35);
console.log("All Passed:", allPassed);

// 4️. Find first student who failed using find
let firstFailed = students.find(student => student.marks < 50);
console.log("First Failed Student:", firstFailed);


// Task 3: Employee Salary Analysis

// Employee data
let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 50000 }
];

// 1️.Increase salary by 10% using map
let increasedSalary = employees.map(emp => {
  return {
    ...emp,
    salary: emp.salary * 1.10
  };
});
console.log("After 10% Increase:", increasedSalary);

// 2️. Get employees with salary > 30000
let highSalaryEmployees = employees.filter(emp => emp.salary > 30000);
console.log("Salary > 30000:", highSalaryEmployees);

// 3️. Calculate total salary expense
let totalSalary = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);
console.log("Total Salary Expense:", totalSalary);

// 4️. Sort employees by highest salary
let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Highest Salary:", sortedEmployees);


//  Task 4: String Real Use Case (Search System)

// Product list
let products = ["Laptop", "Mobile", "Tablet", "Camera"];

// 1️. Check if "Mobile" exists using includes
let hasMobile = products.includes("Mobile");
console.log("Mobile exists:", hasMobile);

// 2️. Convert all to lowercase
let lowerCaseProducts = products.map(item => item.toLowerCase());
console.log("Lowercase Products:", lowerCaseProducts);

// 3️. Find index of "Tablet"
let tabletIndex = products.indexOf("Tablet");
console.log("Index of Tablet:", tabletIndex);

// 4️. Convert array to string using join("-")
let productString = products.join("-");
console.log("Joined String:", productString);


//  Task 5: Date Real-Time Task (Age Calculator)

// 1️. Hardcoded DOB (YYYY-MM-DD format)
let dob = new Date("2002-04-15"); // change this as needed

// 2️. Get current date
let today = new Date();

// 3️. Calculate age
let age = today.getFullYear() - dob.getFullYear();

// Adjust if birthday hasn't occurred yet this year
let monthDiff = today.getMonth() - dob.getMonth();
let dayDiff = today.getDate() - dob.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
  age--;
}

// 4️. Print result
console.log(`You are ${age} years old`);


//  Task 6: Login Validation System

// User database
let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "abcd" }
];

// Input (you can change or use prompt)
let inputUsername = "admin";
let inputPassword = "1234";

// 1️. Check if user exists using find
let foundUser = users.find(user => user.username === inputUsername);

// 2️. Validate username & password
if (foundUser && foundUser.password === inputPassword) {
  console.log("Login Success ✅");
} else {
  console.log("Invalid Credentials ❌");
}


// Task 7: Even Number Analyzer

 // Numbers array
let numbers = [10, 15, 20, 25, 30];

// 1️. Get all even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 2️. Check if any odd number exists
let hasOdd = numbers.some(num => num % 2 !== 0);
console.log("Any Odd Number Exists:", hasOdd);

// 3️. Check if all numbers are even
let allEven = numbers.every(num => num % 2 === 0);
console.log("All Numbers Are Even:", allEven);

// 4️. Find first number > 20
let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First Number > 20:", firstGreaterThan20);


//  Bonus Challenge (Interview Level)

// Orders data
let orders = [
  { id: 1, amount: 500, status: "delivered" },
  { id: 2, amount: 1500, status: "pending" },
  { id: 3, amount: 2000, status: "delivered" }
];

// 1️. Total revenue of delivered orders
let totalDeliveredRevenue = orders
  .filter(order => order.status === "delivered")
  .reduce((total, order) => total + order.amount, 0);

console.log("Total Delivered Revenue:", totalDeliveredRevenue);

// 2️. Get all pending orders
let pendingOrders = orders.filter(order => order.status === "pending");
console.log("Pending Orders:", pendingOrders);

// 3️. Check if any order > 1000
let hasHighValueOrder = orders.some(order => order.amount > 1000);
console.log("Any Order > 1000:", hasHighValueOrder);

// 4️. Sort orders by amount (ascending)
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Orders (Ascending):", sortedOrders);