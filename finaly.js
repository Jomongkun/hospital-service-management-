//Get patient info
let name = prompt("Enter your name:"); // Ask the user to enter their name
let age = parseInt(prompt("Enter your age:")); // Ask the user to enter their age and convert the input string to a number
let gender = prompt("Enter your gender:"); // Ask the user to enter their gender
let address = prompt("Enter your address:"); // Ask the user to enter their address

// Display patient info
console.log("Admission Complete!");
console.log("Name:", name);       // Display name
console.log("Age:", age);         // Display age
console.log("Gender:", gender);   // Display gender
console.log("Address:", address); // Display address

//Check if the user is a senior citizen (60 years old or above)
let isSenior = age >= 60; // true if age is 60 or more
console.log("Senior Citizen:", isSenior ? "Yes (10% discount applied)" : "No"); // Print whether the patient is a senior

// Show list of available hospital services
console.log("\nAvailable Services:");
console.log("1. Drug Test - ₱500");            // Option 1
console.log("2. X-Ray - ₱1000");               // Option 2
console.log("3. General Check-Up - ₱300");     // Option 3

// Let the user choose two services by entering service numbers
let choice1 = prompt("Enter the number of your first service (1-3):");  // First service choice
let choice2 = prompt("Enter the number of your second service (1-3):"); // Second service choice

// Initialize variables to store first service name and price
let service1 = "";
let price1 = 0;

// Determine first service based on user input
if (choice1 === "1") {
  service1 = "Drug Test";
  price1 = 500;
} else if (choice1 === "2") {
  service1 = "X-Ray";
  price1 = 1000;
} else if (choice1 === "3") {
  service1 = "General Check-Up";
  price1 = 300;
} else {
  console.log("Invalid first service."); // Handle invalid input
}

// Initialize variables to store second service name and price
let service2 = "";
let price2 = 0;

// Determine second service based on user input
if (choice2 === "1") {
  service2 = "Drug Test";
  price2 = 500;
} else if (choice2 === "2") {
  service2 = "X-Ray";
  price2 = 1000;
} else if (choice2 === "3") {
  service2 = "General Check-Up";
  price2 = 300;
} else {
  console.log("Invalid second service."); // Handle invalid input
}

//Compute total and discount
let total = price1 + price2; // Calculate total price of services
let discount = isSenior ? total * 0.10 : 0; // Calculate discount (10% for seniors)
let finalAmount = total - discount; // Calculate final amount after discount

// 
console.log("\n===== RECEIPT =====");
console.log("Patient Name:", name);// Show patient name
console.log("Availed Services:");   // List selected services
console.log("- " + service1 + ": ₱" + price1); // First service
console.log("- " + service2 + ": ₱" + price2); // Second service
console.log("Subtotal: ₱" + total);            // Before discount
console.log("Senior Discount: ₱" + discount);  // Discount amount
console.log("Total Amount to Pay: ₱" + finalAmount); // Final total
console.log("Thank you for using our hospital services!"); // Closing message