/* pwd_validate.js
 * 
 * This script provides a means for checking the password and password validation fields, assigning
 * them an invalid class if they do not match.
 */


const pwdInput = document.querySelector("#password");
const pwdConfirm = document.querySelector("#password-confirm");

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

