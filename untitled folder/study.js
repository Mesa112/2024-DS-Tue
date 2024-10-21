class Car {
    constructor(brand, drive, likeliness) {
        this.brand = brand;
        this.drive = drive;
        this.likeliness = likeliness;
    }

    // Method to return car details as HTML
    displayCarDetails() {
        return `
            <p><strong>Brand:</strong> ${this.brand}</p>
            <p><strong>Drive:</strong> ${this.drive}</p>
            <p><strong>Likeliness:</strong> ${this.likeliness}</p>
        `;
    }
}

// Create car objects
let toyota = new Car('landCruiser 1958', 'AWD', 98);
let mazda = new Car('cx-50', 'AWD', 100);

// Function to display Mazda car details
function showCarDetails() {
    // Get the div where details will be displayed
    const carDetailsDiv = document.getElementById('car-details');
    
    // Display Mazda car details inside the div
    carDetailsDiv.innerHTML = mazda.displayCarDetails();
}