function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form input values
    const firstName = document.getElementById("firstName").value;

    // Add more input fields and validation as needed

    // Perform validation (example: checking if first name is not empty)
    if (firstName.trim() === "") {
        alert("First Name cannot be empty");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("admission-form").reset(); // Clear the form
    }
}
