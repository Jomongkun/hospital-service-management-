// Admission info
// Prompts the user for personal information
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let gender = prompt("Enter your gender:");
let address = prompt("Enter your address:");
alert("Admission complete!");

// Simple services list
// A list of hospital services with names and prices
let services = [
  { name: "Drug Test", price: 500 },
  { name: "X-Ray", price: 1000 },
  { name: "General Check-Up", price: 300 },
  { name: "Cardiology", price: 800 },
  { name: "Appendectomy", price: 5000 }
];

// Selected services by user
let selectedServices = [];

let exit = false; // Controls the main menu loop

// Loop to keep showing the menu until the user exits
while (!exit) {
  // Displays options to the user
  let choice = prompt(
    "Choose an option:\n1. View Services\n2. Add Service\n3. View Selected\n4. Checkout & Exit"
  );

  if (choice === "1") {
    // Display the list of available services
    let list = "";
    for (let i = 0; i < services.length; i++) {
      list += (i + 1) + ". " + services[i].name + " - ₱" + services[i].price + "\n";
    }
    alert("Available Services:\n" + list);

  } else if (choice === "2") {
    // Add a selected service to the user's list
    let index = prompt("Enter service number to add (1-5):");
    let service = services[index - 1];
    if (service) {
      selectedServices.push(service); // Adds the selected service to the list
      alert(service.name + " added!");
    } else {
      alert("Invalid service number.");
    }

  } else if (choice === "3") {
    // Display selected services
    if (selectedServices.length === 0) {
      alert("No services selected yet.");
    } else {
      let list = "";
      for (let i = 0; i < selectedServices.length; i++) {
        list += (i + 1) + ". " + selectedServices[i].name + " - ₱" + selectedServices[i].price + "\n";
      }
      alert("Selected Services:\n" + list);
    }

  } else if (choice === "4") {
    // Checkout and display receipt
    let total = 0;
    let receipt = "Receipt for " + name + ":\n\n";
    for (let i = 0; i < selectedServices.length; i++) {
      receipt += "- " + selectedServices[i].name + ": ₱" + selectedServices[i].price + "\n";
      total += selectedServices[i].price;
    }
    receipt += "\nTotal: ₱" + total;
    alert(receipt + "\n\nThank you!");
    exit = true; // Ends the loop

  } else {
    // Handles invalid menu choices
    alert("Invalid option. Try again.");
  }
}
