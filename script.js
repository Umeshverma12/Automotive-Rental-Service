// Booking form validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Your message has been sent successfully.");
});

// Dynamic Car Availability Check
const cars = [
    {
        model: "Luxury Sedan",
        price: 150,
        availableFrom: "2025-02-20",
        availableTo: "2025-02-28",
    },
    {
        model: "Sports Car",
        price: 200,
        availableFrom: "2025-02-15",
        availableTo: "2025-03-01",
    },
    {
        model: "Family SUV",
        price: 120,
        availableFrom: "2025-02-18",
        availableTo: "2025-02-25",
    }
];

// Function to check car availability based on selected dates
function checkAvailability() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (!startDate || !endDate) {
        alert("Please select both start and end dates.");
        return;
    }

    const availableCars = cars.filter(car => {
        const carAvailableFrom = new Date(car.availableFrom);
        const carAvailableTo = new Date(car.availableTo);
        const selectedStartDate = new Date(startDate);
        const selectedEndDate = new Date(endDate);

        return selectedStartDate >= carAvailableFrom && selectedEndDate <= carAvailableTo;
    });

    displayAvailableCars(availableCars);
}

// Function to dynamically display available cars
function displayAvailableCars(cars) {
    const carContainer = document.getElementById("available-cars");
    carContainer.innerHTML = ""; // Clear previous results

    if (cars.length === 0) {
        carContainer.innerHTML = "<p>No cars available for the selected dates.</p>";
        return;
    }

    cars.forEach(car => {
        const carElement = document.createElement("div");
        carElement.classList.add("car-item");
        
        carElement.innerHTML = `
            <img src="car-image-placeholder.jpg" alt="${car.model}">
            <h3>${car.model}</h3>
            <p>$${car.price}/day</p>
            <button class="btn">Rent Now</button>
        `;
        
        carContainer.appendChild(carElement);
    });
}

// Event listener for the "Check Availability" button
document.getElementById("check-availability-btn").addEventListener("click", checkAvailability);
