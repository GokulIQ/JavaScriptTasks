// Task 1: E-commerce Cart System

let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];

let cart2 = [
  { name: "Watch", price: 2000 }
];

// Merge carts
let mergedCart = [...cart1, ...cart2];
console.log("Merged Cart:", mergedCart);

// Add product
mergedCart.push({ name: "Bag", price: 800 });
console.log("After Adding Product:", mergedCart);

// Remove last product 
mergedCart.pop();
console.log("After Removing Last Product:", mergedCart);

// Total price
let totalPrice = mergedCart.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price:", totalPrice);


// Task 2: User Profile Management

let user = {
  name: "Gokul",
  role: "Developer",
  salary: 20000
};

let update = {
  role: "Senior Developer",
  salary: 60000
};

// 1. Merge user and update using spread
let updatedUser = { ...user, ...update };

// 2. Destructure values
let { name, role, salary } = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);


// Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName, ...scores) {
  // Print team name
  console.log("Team:", teamName);

  // Print all scores
  console.log("Scores:", scores);

  // Calculate total score
  let total = scores.reduce((sum, score) => sum + score, 0);
  console.log("Total Score:", total);

  // Find highest score
  let highest = Math.max(...scores);
  console.log("Highest Score:", highest);
}

// Example
teamScore("CSK", 50, 60, 70, 80);


//  Task 4: Nested Data Extraction (API Response Simulation)

let apiData = {
  user: {
    Studentname: "Gokul",
    address: {
      city: "Kallai",
      pincode: 605801
    }
  }
};

// 1. Nested destructuring
let {
  user: {
    Studentname,
    address: { city, pincode }
  }
} = apiData;

console.log(`${Studentname} lives in ${city} - ${pincode}`);

//  Task 5: Array Dashboard (Admin Panel)

// Initial array
let users = ["A", "B", "C", "D", "E"];

// 1. Remove "C" and "D" and add "X", "Y" in same place
// index of "C" = 2
users.splice(2, 2, "X", "Y");
console.log("After splice:", users);

// 2. Get first 3 users using slice
let firstThree = users.slice(0, 3);
console.log("First 3 users:", firstThree);

// 3. Check if "B" exists
let hasB = users.includes("B");
console.log("Is B present?", hasB);

// 4. Find index of "E"
let indexE = users.indexOf("E");
console.log("Index of E:", indexE);


// Task 6: Data Cleaning Tool

// Input data
let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// 1. Convert to flat array (deep flatten)
let flatData = messyData.flat(Infinity);

// 2. Remove null and undefined
let cleanData = flatData.filter(item => item !== null && item !== undefined);

// Output
console.log("Clean Array:", cleanData);

// Task 7: Sorting Bug Fix (Real Industry Issue ⚠️)

let prices = [1000, 200, 50, 5000];

// Correct numeric sort
prices.sort((a, b) => a - b);

console.log("Sorted Prices:", prices);

//Reason:
// JavaScript’s default sort() converts numbers to strings
// Then sorts lexicographically (dictionary order)

// Task 8: Analytics Report Generator

// Orders data
let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

// 1. Total revenue using reduce
let totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

// 2. Average order value
let average = totalRevenue / orders.length;

// Output
console.log("Total Revenue:", totalRevenue);
console.log("Average Order Value:", average);

//  Task 9: Inventory System (Advanced)

// Initial inventory
let inventory1 = ["Laptop", "Mouse", "Keyboard"];
let inventory2 = ["Monitor", "Printer"];

// 1. Add item (push)
function addItem(inventory, item) {
  inventory.push(item);
  console.log("After Adding:", inventory);
}

// 2. Remove item (using splice)
function removeItem(inventory, item) {
  let index = inventory.indexOf(item);
  if (index !== -1) {
    inventory.splice(index, 1);
  }
  console.log("After Removing:", inventory);
}

// 3. Update item (replace using splice)
function updateItem(inventory, oldItem, newItem) {
  let index = inventory.indexOf(oldItem);
  if (index !== -1) {
    inventory.splice(index, 1, newItem);
  }
  console.log("After Updating:", inventory);
}

// 4. Search item (includes)
function searchItem(inventory, item) {
  let exists = inventory.includes(item);
  console.log(`Is "${item}" available?`, exists);
}

// 5. Merge inventories (spread)
function mergeInventory(inv1, inv2) {
  let merged = [...inv1, ...inv2];
  console.log("Merged Inventory:", merged);
  return merged;
}

// Usage
addItem(inventory1, "Tablet");              
removeItem(inventory1, "Mouse");           
updateItem(inventory1, "Keyboard", "Gaming Keyboard"); 
searchItem(inventory1, "Laptop");          

let finalInventory = mergeInventory(inventory1, inventory2); 


// Task 10: Interview Level Challenge

// Function using rest operator
function processData(...data) {
  // 1. Flatten all values 
  let flatData = data.flat(Infinity);

  // 2. Remove duplicates
  let uniqueData = [...new Set(flatData)];

  // 3. Sort ascending (numeric)
  let sortedData = uniqueData.sort((a, b) => a - b);

  // 4. Return final array
  return sortedData;
}

// Example input
let result = processData(1, 2, [3, 4], [5, [6]]);

console.log("Final Output:", result);

