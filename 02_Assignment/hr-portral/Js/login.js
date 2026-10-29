
function validateUsername() {
    let username = document.getElementById("username").value;
    let errorUsername = document.getElementById("error-username");
    const regexUsername = /^[A-Za-z0-9_]{3,15}$/;

    if(username === ""){
        errorUsername.innerHTML = "Username is required.";
        return false;
    }else if(!regexUsername.test(username)){
        errorUsername.innerHTML = "Username must be 3-15 characters (letters, numbers, and underscores only).";
        return false;
    }

    errorUsername.innerHTML = "";
    return true;
}

function togglePassword() {
    let password = document.getElementById("password");
    let icon = document.getElementById("togglePassword");

    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function validatePassword(){
    let password = document.getElementById("password").value;
    let errorPassword = document.getElementById("error-password");
    const regexPassword =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

    if(password === ""){
        errorPassword.innerHTML = "Password is required."
        return false;
    }else if(!regexPassword.test(password)){
        errorPassword.innerHTML = "Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.";
        return false;
    }

    errorPassword.innerHTML = "";
    return true;
}

function validate(){
    let isUsernameValid = validateUsername();
    let isPasswordValid = validatePassword();

    return isUsernameValid && isPasswordValid;
}