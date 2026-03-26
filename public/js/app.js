'use strict';

// Sample JavaScript functionality for IELTS Prep website

// Function to validate user input
function validateInput(input) {
    if (!input || input.trim() === '') {
        alert('Input cannot be empty!');
        return false;
    }
    return true;
}

// Function to submit form
function submitForm() {
    const userInput = document.getElementById('userInput').value;
    if (validateInput(userInput)) {
        // Send input to the server or process it as needed
        console.log('Submitting: ', userInput);
        alert('Form submitted!');
    }
}

// Event listener for form submission
document.getElementById('submitBtn').addEventListener('click', submitForm);
