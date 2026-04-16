// Task 1: Order System (setTimeout)

function task1(next) {
  console.log("Order placed");

  setTimeout(() => console.log("Preparing food"), 2000);
  setTimeout(() => console.log("Food ready"), 4000);
  setTimeout(() => {
    console.log("Delivered");
    next(); // move to next task after completion
  }, 5000);
}


// Task 2: Digital Clock (setInterval)

function task2(next) {
  let count = 0;

  const clock = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    count++;

    if (count === 10) {
      clearInterval(clock);
      console.log("Clock stopped");
      next(); // move to next task
    }
  }, 1000);
}


// Task 3: Callback Hell Simulation

function task3(next) {
  function loginUser(callback) {
    setTimeout(() => {
      console.log("User Logged In");
      callback();
    }, 1000);
  }

  function getUserData(callback) {
    setTimeout(() => {
      console.log("User Data Fetched");
      callback();
    }, 1000);
  }

  function getUserPosts(callback) {
    setTimeout(() => {
      console.log("User Posts Fetched");
      callback();
    }, 1000);
  }

  loginUser(() => {
    getUserData(() => {
      getUserPosts(() => {
        next(); 
      });
    });
  });
}


//  Task 4: Fake API Promise

function task4() {
  function getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true;

        if (success) {
          resolve([
            { id: 1, name: "Mobile", price: 15000 },
            { id: 2, name: "Laptop", price: 55000 },
            { id: 3, name: "Headphones", price: 2000 }
          ]);
        } else {
          reject("API Failed");
        }
      }, 2000);
    });
  }

  getProducts()
    .then((products) => console.log("Products:", products))
    .catch((err) => console.log("Error:", err))
    .finally(() => console.log("Request Completed"));
}

// Run Sequentially
task1(() => {
  task2(() => {
    task3(() => {
      task4();
    });
  });
});