/* pwd_validate.js
 * 
 * This script 
 */


const pwdInput = document.querySelector("#password");
const pwdConfirm = document.querySelector("#password-confirm");
const pwdInvalidLabel = document.querySelector(".pwd-help");
const submitButton = document.querySelector(".submit-block>button");
const allInputs = document.querySelectorAll("input");


/* Don't identify fields as invalid unless they've been selected at least once */
allInputs.forEach((inputElem) => {
    inputElem.addEventListener("focus", (event) => {
        event.target.classList.add("validation-enabled");
    });
});

submitButton.addEventListener("click", (event) => {
    allInputs.forEach((inputElem) => {
        inputElem.classList.add("validation-enabled");
    });
});

/* I'm using class "invalid-style" as a way to trigger invalid-like styling
 * without other invalid element related logic */
let verifyValuesEqual = function(input1, input2) {
    if (input1.value !== input2.value) {
        input1.classList.add("invalid-style");
        input2.classList.add("invalid-style");
        return false;
    }
    else {
        input1.classList.remove("invalid-style");
        input2.classList.remove("invalid-style");
        return true;
    }
}

let validatePasswords = function() {
    if (verifyValuesEqual(pwdInput, pwdConfirm)) {
        pwdInvalidLabel.classList.add("element-hidden");
    }
    else {
        pwdInvalidLabel.classList.remove("element-hidden");
    }
}

pwdInput.addEventListener("input", validatePasswords);
pwdConfirm.addEventListener("input", validatePasswords);
validatePasswords();

