const form = document.getElementById("form");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");
const password = document.getElementById("password");
const username = document.getElementById("username");

const showError = (input, errorMessage) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const smallEle = formControl.querySelector("small");
  smallEle.innerText = errorMessage;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const checkRequiredFields = (fields) => {
  let allFieldsValid = true;
  fields.forEach((field) => {
    if (field.value.trim() === "") {
      allFieldsValid = false;
      showError(field, `${field.id} is required`);
    } else {
      showSuccess(field);
    }
  });
  return allFieldsValid;
};

const checkLength = (input, minLength, maxLength) => {
  const val = input.value.trim();
  let validLength = false;
  if (val.length < minLength) {
    showError(
      input,
      `${input.id}s' length should be greater than ${minLength}`
    );
  } else if (val.length > maxLength) {
    showError(input, `${input.id}s' length should be less than ${maxLength}`);
  } else {
    validLength = true;
    showSuccess(input);
  }
  return validLength;
};

const checkPasswords = (input1, input2) => {
  const areMatching = input1.value.trim() === input2.value.trim();
  if (areMatching) {
    showSuccess(input1);
    showSuccess(input2);
  } else {
    showError(input1, "Passwords do not match");
    showError(input2, "Passwords do not match");
  }
  return areMatching;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkRequiredFields([username, email, password, password2])) {
    const validUsername = checkLength(username, 3, 12);
    const validPassword = checkLength(password, 5, 12);
    if (validPassword) {
      const matchingPasswords = checkPasswords(password, password2);
      if (validUsername && validPassword && matchingPasswords) {
        alert("Great your form will be submitted");
      } else {
        // invalid form fields
      }
    }
  }
});
