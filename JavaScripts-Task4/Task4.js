// Task1

function calculateDiscount(productName, price) {
    let finalPrice;

    if (price > 1000) {
        finalPrice = price - (price * 0.20); // 20% discount
    } else {
        finalPrice = price - (price * 0.10); // 10% discount
    }

    return `Product: ${productName}\nFinal Price: ${finalPrice}`;
}

// Example usage
console.log(calculateDiscount("Shoes", 2000));


// Task 2

function placeOrder(callback) {
    console.log("Order placed");
    callback();
}

function payment(amount, callback) {
    console.log(`Payment of ${amount} successful`);
    callback();
}

function orderSuccess() {
    console.log("Order delivered");
}

// Execution flow
placeOrder(() => {
    payment(500, orderSuccess);
});

// Task 3

const employees = [
    { name: "Navi", salary: 50000 },
    { name: "John", salary: 70000 }
];

for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];

    if (emp.salary > 60000) {
        console.log(`${emp.name}: High Salary`);
    } else {
        console.log(`${emp.name}: Normal Salary`);
    }
}

// Task 4

let correctPassword = "1234";
let enteredPassword = "";
let attempts = 0;
let maxAttempts = 3;

// Simulated user inputs (for demo)
let inputs = ["1111", "2222", "1234"];

while (attempts < maxAttempts) {
    console.log(`Attempt ${attempts + 1}`);

    enteredPassword = inputs[attempts]; // simulate user input

    if (enteredPassword === correctPassword) {
        console.log("Login success");
        break;
    }

    attempts++;
}

if (attempts === maxAttempts && enteredPassword !== correctPassword) {
    console.log("Login failed");
}

// Task 5

function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const coupons = couponGenerator();

// Simulating button clicks
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

// Task 6

let cart = [100, 200, 300, 400];

let total = 0;

for (let price of cart) {
    total += price;
}

console.log("Total Bill:", total);

// Task 7

let user = {
  name: "Gokul",
  role: "Developer",
  location: "India"
};

for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}

// Task 8

function createPhone() {
    return "Phone";
}

function createBattery() {
    return "Battery";
}

function createCharger() {
    return "Charger";
}

// Combine all components
function createOrder() {
    const phone = createPhone();
    const battery = createBattery();
    const charger = createCharger();

    return `Your Order: ${phone} + ${battery} + ${charger}`;
}

// Example usage
console.log(createOrder());


// Task 9

function collegeForm(name, department = "Not Assigned") {
    console.log(`Name: ${name}`);
    console.log(`Department: ${department}`);
}

// Example usage
collegeForm("Navi", "Computer Science");
collegeForm("John");

// Task 10

function emi(principal) {
    return function(rate) {
        return function(time) {
            let emiValue = (principal * rate * time) / 100;
            return emiValue;
        };
    };
}

// Example usage
const result = emi(10000)(2)(12);
console.log("EMI:", result);

// Task 11

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} → Even`);
    } else {
        console.log(`${i} → Odd`);
    }
}

// Task 12

function testScope() {
    if (true) {
        var a = 10;     // function-scoped
        let b = 20;     // block-scoped
        const c = 30;   // block-scoped
    }

    console.log("var a:", a);

    // Errors (uncomment to see)
    // console.log("let b:", b);
    // console.log("const c:", c);
}

testScope();

// Task 13

(function () {
    alert("🔥 Flash Sale: 50% OFF on Shirts");
})();

// Task 14

function marks(m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return {
        total: total,
        average: average
    };
}

// Example usage
let score = marks(80, 90, 70);

console.log("Total:", score.total);
console.log("Average:", score.average);

// Task 15

function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
}

const offers = offerGenerator();

function getOffer() {
    const result = offers.next();

    if (!result.done) {
        console.log(result.value);
    } else {
        console.log("All offers expired");
    }
}

// Simulating multiple attempts
getOffer();
getOffer();
getOffer();
getOffer(); // exceeds available offers