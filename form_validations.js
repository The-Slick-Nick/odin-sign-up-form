/* pwd_validate.js
 * 
 * This script 
 */


const pwdInput = document.querySelector("#password");
const pwdConfirm = document.querySelector("#password-confirm");
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


let verifyValuesEqual = function(input1, input2) {
    if (input1.value !== input2.value) {
        input1.classList.add("invalid");
        input2.classList.add("invalid");
    }
    else {
        input1.classList.remove("invalid");
        input2.classList.remove("invalid");
    }
}

pwdInput.addEventListener("input", () => { verifyValuesEqual(pwdInput, pwdConfirm); });
pwdConfirm.addEventListener("input", () => { verifyValuesEqual(pwdInput, pwdConfirm); });

verifyValuesEqual(pwdInput, pwdConfirm);

