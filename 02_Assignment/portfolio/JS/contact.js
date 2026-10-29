
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 1. Name validation
function validateName() {
    let name = document.getElementById("name").value.trim();
    let error = document.getElementById("error-name");

    if (name === "") {
        error.innerHTML = "Name is required";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// 2. Email validation
function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error-email");

    if (email === "") {
        error.innerHTML = "Email is required";
        return false;
    } else if (!regexEmail.test(email)) {
        error.innerHTML = "Invalid email format";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// 3. Date validation
function validateDate() {
    let date = document.getElementById("date").value;
    let error = document.getElementById("error-date");

    if (date === "") {
        error.innerHTML = "Contact date is required";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// 4. Enquiry dropdown validation
function validateEnquiry() {
    let enquiry = document.getElementById("enquiry").value;
    let error = document.getElementById("error-enquiry");

    if (enquiry === "") {
        error.innerHTML = "Please select an enquiry type";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// 5. Contact mode radio validation
function validateContactMode() {
    let mode = document.querySelector(
        'input[name="contact-mode"]:checked'
    );
    let error = document.getElementById("error-contact-mode");

    if (mode === null) {
        error.innerHTML = "Please select Phone or Message";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// 6. File validation
function validateFile() {
    let file = document.getElementById("file");
    let error = document.getElementById("error-file");

    if (file.files.length === 0) {
        error.innerHTML = "Please upload a file";
        return false;
    }

    error.innerHTML = "";
    return true;
}

// Validate all fields on form submission
function validate() {
    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateDate()) isValid = false;
    if (!validateEnquiry()) isValid = false;
    if (!validateContactMode()) isValid = false;
    if (!validateFile()) isValid = false;

    if (isValid) {
        alert("thank-you Sachin for visiting!");
    }

    return isValid;
}
