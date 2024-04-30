let btn = document.querySelector("button");

let inputs = document.querySelectorAll("input");
// console.log(inputs);
function verifyPhoneNumber() {
  let phoneNumber = inputs[1].value;
  if (phoneNumber === "" || phoneNumber.length !== 8) {
    inputs[1].style.backgroundColor = " red";
    inputs[1].style.color = "white";
    inputs[1].classList.add("inputError");
    inputs[1].nextElementSibling.textContent =
      "Phone number must  containt exactly 8 digits";
  }
  setTimeout(() => {
    inputs[1].nextElementSibling.textContent = "";
  }, 10000);
}
function verifyEmail() {
  let email = inputs[2].value;
  let endOfEmail = email
    .substring(email.indexOf("@") + 1)
    .substring(email.substring(email.indexOf("@") + 1).indexOf(".") + 1);
  if (email === "" || !email.includes("@") || endOfEmail.length < 2) {
    inputs[2].style.backgroundColor = " red";
    inputs[2].style.color = "white";
    inputs[2].classList.add("inputError");
    inputs[2].nextElementSibling.textContent = "Not a valid email";
  }
  setTimeout(() => {
    inputs[2].nextElementSibling.textContent = "";
  }, 10000);
}
function verifyPassword() {
  let password = inputs[3].value;
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  if (password === "" || !password.match(regex)) {
    inputs[3].style.backgroundColor = " red";
    inputs[3].style.color = "white";
    inputs[3].classList.add("inputError");
    inputs[3].nextElementSibling.textContent =
      "Password must contain at least one uppercase, one lowercase, one digit and one specific character with length of 8";
  }
  setTimeout(() => {
    inputs[3].nextElementSibling.textContent = "";
  }, 10000);
}
function verifyUserName() {
  let userName = inputs[0].value;

  if (userName === "" || password.length < 3) {
    inputs[0].style.backgroundColor = " red";
    inputs[0].style.color = "white";
    inputs[0].classList.add("inputError");
    inputs[0].nextElementSibling.textContent =
      "username must contain at least three characters";
  }
  setTimeout(() => {
    inputs[0].nextElementSibling.textContent = "";
  }, 10000);
}
btn.addEventListener("click", function () {
  verifyUserName();
  verifyPhoneNumber();
  verifyEmail();
  verifyPassword();
});
