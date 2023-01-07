function checkFirstName(element) {
    if(element.validity.valueMissing){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Minimum - 2 letters");
        element.reportValidity();
        return false;
    }else if(element.validity.tooShort) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Should have 2 through 15 letters:) Too short or too long, try again.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooLong) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Maximum - 15 letters long.");
        element.reportValidity();
        return false;
    }else if(/\d/.test(element.value)) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("The numbers aren't allowed.");
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
        element.setCustomValidity("Minimum - 2 letters");
        element.reportValidity();
        return false;
    }else if(element.validity.tooShort) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Should have 2 through 15 letters:) Too short or too long, try again.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooLong) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Maximum - 15 letters");
        element.reportValidity();
        return false;
    }else if(/\d/.test(element.value)) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("The numbers aren't allowed.");
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
        element.setCustomValidity("Please enter your age.");
        element.reportValidity();
        return false;
    }else if(element.validity.rangeUnderflow){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("You might be too young for the registration.");
        element.reportValidity();
        return false;
    }else if(element.validity.rangeOverflow){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity(`The age ${element.value} is too big`);
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

function checkPseudoName(element) {
    if(element.validity.valueMissing){
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Minimum - 2 letters");
        element.reportValidity();
        return false;
    }else if(element.validity.tooShort) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Should have 2 through 15 letters:) Too short or too long, try again.");
        element.reportValidity();
        return false;
    }else if(element.validity.tooLong) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Maximum - 15 letters long.");
        element.reportValidity();
        return false;
    } else {
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
        element.setCustomValidity("PLease enter your e-mail address.");
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
        element.setCustomValidity("Please enter your phone number.");
        element.reportValidity();
        return false;
    }else if(element.validity.patternMismatch) {
        if(element.classList.contains('valid')) {
            element.classList.remove('valid');
        };
        if(!element.classList.contains('invalid')) {
            element.classList.add('invalid');
        };
        element.setCustomValidity("Wrong format (include Ukrainian country code).");
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
        element.setCustomValidity("Must contain 8 characters one uppercase, lowercase, and one number.");
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
        element.setCustomValidity("Please enter a password first.");
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
    "pseudo-name": checkPseudoName,
    "email": checkEmail,
    "phone": checkPhone,
    "password": checkPassword,
    "confirm-password": checkConfirmPassword,
    "tos-accept": (element) => "",
};


inputElementArray.forEach(i => i.addEventListener('input', (e) => validityCheckArray[e.target.id](e.target)));

const submitFeedback = document.createElement('p');
submitFeedback.textContent = "Your form was submitted successfully.";
submitFeedback.style.color = "rgba(54, 117, 97, 0.568)";

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