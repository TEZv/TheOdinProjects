function checkFirstName(element) {
    if(element.validity.valueMissing){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your first name.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooShort) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your full first name.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooLong) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("I know your name isn't that long.");
        element.reportValidity();
        return false;
    }else if(/\d/.test(element.value)) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("I know your name doesn't have numbers in it.");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkLastName(element) {
    if(element.validity.valueMissing){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your last name.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooShort) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your full last name.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooLong) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("I know your name isn't that long.");
        element.reportValidity();
        return false;
    }else if(/\d/.test(element.value)) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("I know your name doesn't have numbers in it.");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkGender(element) {
    if(element.value == ""){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Select one of the options.");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkAge(element) {
    if(element.value == "") {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your age.");
        element.reportValidity();
        return false;
    }else if(element.validity.rangeUnderflow){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("You might be too young for this.");
        element.reportValidity();
        return false;
    }else if(element.validity.rangeOverflow){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity(`Be honest with me, you're not ${element.value}`);
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkEmail(element) {
    if(element.value == "") {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your e-mail address.");
        element.reportValidity();
        return false;
    }else if(element.validity.typeMismatch) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkPhone(element) {
    if(element.value == "") {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter your phone number.");
        element.reportValidity();
        return false;
    }else if(element.validity.patternMismatch) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Wrong format (include country code).");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkPassword(element) {
    if(element.value == "") {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter a password.");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

function checkConfirmPassword(element) {
    const password = document.querySelector('#password').value;
    if(password == "") {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Enter a password first.");
        element.reportValidity();
        return false;
    }else if(element.value != password){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("This doesn't match your password.");
        element.reportValidity();
        return false;
    }else {
        if(!element.classList.contains('valid')) {
            element.classList.remove('invalid');
            element.classList.add('valid');
        };
        element.setCustomValidity("");
        return true;
    };
};

const inputElements = document.querySelectorAll('input, select');
const inputElementArray = Array.from(inputElements);
const validityCheckArray = {
    "first-name": checkFirstName,
    "last-name": checkLastName,
    "gender": checkGender,
    "age": checkAge,
    "email": checkEmail,
    "phone": checkPhone,
    "password": checkPassword,
    "confirm-password": checkConfirmPassword,
    "tos-accept": (element) => "",
};


inputElementArray.forEach(i => i.addEventListener('input', (e) => validityCheckArray[e.target.id](e.target)));

const submitFeedback = document.createElement('p');
submitFeedback.textContent = "Your form was submitted successfully.";
submitFeedback.style.color = "#68b654c0";

const submitButton = document.querySelector('button');
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    if(!validityCheckArray["gender"](document.querySelector('#gender'))) {
        e.preventDefault();
    }else {
        e.preventDefault();
        setTimeout(() => {
            inputElementArray.forEach(i => i.classList.remove('valid'));
            form.appendChild(submitFeedback);
            form.reset();
        }, 750);
    };
});