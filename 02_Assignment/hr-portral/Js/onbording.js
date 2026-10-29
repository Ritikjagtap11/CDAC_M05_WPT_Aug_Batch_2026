

function validateName() {
    let name = document.getElementById("name").value.trim();
    let errorName = document.getElementById("errorName");

    if (name === "") {
        errorName.innerHTML = "Name is required.";
        return false;
    }

    if (name.length < 3) {
        errorName.innerHTML = "Name must contain at least 3 characters.";
        return false;
    }

    errorName.innerHTML = "";
    return true;
}

function validateEmail(){
    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("errorEmail");

    if(email === ""){
        errorEmail.innerHTML = "Email is required."
        return false;
    }

    errorEmail.innerHTML = "";
    return true;
}

function validatePassword(){
    let password = document.getElementById("password").value;
    let errorPassword = document.getElementById("errorPassword");

    if(password === ""){
        errorPassword.innerHTML = "Password is required."
        return false;
    }

    errorPassword.innerHTML = "";
    return true;
}

function validateDOB(){
    let dob = document.getElementById("dob-date").value;
    let errorDOB = document.getElementById("errorDOB");

    if(dob === ""){
        errorDOB.innerHTML = "Date of birth is required.";
        return false;
    }

    errorDOB.innerHTML = "";
    return true;
}

function validateJoinDate(){
    let joinDate = document.getElementById("join-date").value;
    let errorJoinDate = document.getElementById("errorJoinDate");

    if(joinDate === ""){
        errorJoinDate.innerHTML = "Join date is required."
        return false;
    }

    errorJoinDate.innerHTML = "";
    return true;
}

function validateSlotTime(){
    let slotTime = document.getElementById("slot-time").value;
    let errorSlotTime = document.getElementById("errorSlotTime");

    if(slotTime === ""){
        errorSlotTime.innerHTML = "Slot time is required."
        return false;
    }

    errorSlotTime.innerHTML = "";
    return true;
}

function validateReportTime(){
    let reportTime = document.getElementById("report-time").value;
    let errorReportTime = document.getElementById("errorReportTime");

    if(reportTime === ""){
        errorReportTime.innerHTML = "Report time is required."
        return false;
    }

    errorReportTime.innerHTML = "";
    return true;
}

function validateGender(){
    let gender = document.querySelector(`input[name="gender"]:checked`);
    let errorGender = document.getElementById("errorGender");

    if(gender === null){
        errorGender.innerHTML = "Gender is required."
        return false;
    }

    errorGender.innerHTML = "";
    return true;
}

function validateQualification(){
    let qualification = document.getElementById("qualification").value;
    let errorQualification = document.getElementById("errorQualification");

    if(qualification === ""){
        errorQualification.innerHTML = "Qualification selection is required."
        return false;
    }

    errorQualification.innerHTML ="";
    return true;
}

function validateDepartment(){
    let department = document.getElementById("department").value;
    let errorDepartment = document.getElementById("errorDepartment");

    if(department === ""){
        errorDepartment.innerHTML = "Department selection is required.";
        return false;
    }

    errorDepartment.innerHTML ="";
    return true;
}

function validateAddress(){
    let address = document.getElementById("address").value;
    let errorAddress = document.getElementById("errorAddress");

    if(address === ""){
        errorAddress.innerHTML="Address is a required.";
        return false;
    }

    errorAddress.innerHTML="";
    return true;
}

function validateFile(){
    let filePhoto = document.getElementById("file").files[0];
    let errorFile= document.getElementById("errorFile");

    if(!filePhoto){
        errorFile.innerHTML="Photo is a required.";
        return false;
    }

    errorFile.innerHTML="";
    return true;
}

function validateCheckBox(){
    let checked = document.getElementById("checkbox").checked;
    let errorCheckBox= document.getElementById("errorCheckBox");

    if(!checked){
        errorCheckBox.innerHTML="Decalaration is a required.";
        return false;
    }

    errorCheckBox.innerHTML="";
    return true;
}

function validate(){
    let isNameValidate = validateName();
    let isEmailValidate = validateEmail();
    let isPasswordValidate = validatePassword();
    let isDOBValidate = validateDOB();
    let isJoinDateValidate = validateJoinDate();
    let isSlotTimeValidate = validateSlotTime();
    let isReportTimeValidate = validateReportTime();
    let isGenderValidate = validateGender();
    let isQualificationValidate = validateQualification();
    let isDepartmentValidate = validateDepartment();
    let isAddressValidate = validateAddress();
    let isFileValidate = validateFile();
    let isCheckBoxValidate = validateCheckBox();

    return isNameValidate 
           && isEmailValidate
           && isPasswordValidate
           && isDOBValidate
           && isJoinDateValidate
           && isSlotTimeValidate
           && isReportTimeValidate
           && isGenderValidate
           && isQualificationValidate
           && isDepartmentValidate
           && isAddressValidate
           && isFileValidate
           && isCheckBoxValidate;
}




// function validate() {
//     return true; // Change to false to test rejection
// }

function createAccount() {
    return new Promise((resolve, reject) => {
        if (validate()) {
            setTimeout(() => {
                resolve("Creating your account...");
            }, 1000);
        } else {
            reject("Please fill all the fields.");
        }
    });
}

function sendWelcomeEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Sending welcome email...");
        }, 2000);
    });
}

function assignLaptop() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Assigning your laptop...");
        }, 1500);
    });
}

function welcomeUser(name){
    return new Promise((resolve,reject)=>{
        if (name.length < 3) {
            reject("Name must contain at least 3 characters.");
        } else {
            resolve(`Welcome aboard, ${name}!`);
        }
    });
}



// async function handleSubmit() {
//     const name = document.getElementById("name").value.trim();

//     try {
//         const accountMsg = await createAccount();
//         console.log(accountMsg);

//         const emailMsg = await sendWelcomeEmail();
//         console.log(emailMsg);

//         const laptopMsg = await assignLaptop();
//         console.log(laptopMsg);

//         const welcomeMsg = await welcomeUser(name);
//         console.log(welcomeMsg);

//     } catch (err) {
//         console.log(err);
//     }
// }

// document.getElementById("onboardingForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     handleSubmit();
// });



function handleSubmit() {
    const name = document.getElementById("name").value.trim();

    createAccount()
        .then((msg) => {
            console.log(msg);
            return sendWelcomeEmail();
        })
        .then((msg) => {
            console.log(msg);
            return assignLaptop();
        })
        .then((msg) => {
            console.log(msg);
            return welcomeUser(name);
        })
        .then((msg) => {
            console.log(msg);
        })
        .catch((err) => {
            console.log(err);
        });

    return false;
}