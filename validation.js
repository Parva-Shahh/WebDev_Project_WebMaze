function validateForm(event) {
    const form = event.target;
    let isValid = true;

    // Validate text fields
    const textFields = form.querySelectorAll('input[type="text"]:required');
    textFields.forEach(field => {
        if (field.value.trim() === '') {
            alert(`The field "${field.previousElementSibling.textContent}" is required!`);
            isValid = false;
        }
    });

    // Validate email
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Validate phone number
    const phoneField = form.querySelector('input[type="tel"]');
    if (phoneField && !/^\+\d{10,15}$/.test(phoneField.value)) {
        alert('Please enter a valid phone number in the format: +1234567890');
        isValid = false;
    }

    // Validate date and time
    const dateField = form.querySelector('input[type="datetime-local"]');
    if (dateField && dateField.value === '') {
        alert('Please select a valid date and time.');
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
}

// Attach validation to all forms on the page
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', validateForm);
    });
});
