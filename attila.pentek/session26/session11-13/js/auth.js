let isLoginPage = true;

// const switchButton = document.getElementById("switchButton");
// const logintButton = document.getElementById("loginButton");
// const emailField = document.getElementById("usarname");
// const passwordField = document.getElementById("password");
// const error = document.getElementById("error");

const ref = {
  switchButton: document.getElementById("switchButton"),
  loginButton: document.getElementById("loginButton"),
  emailField: document.getElementById("usarname"),
  passwordField: document.getElementById("password"),
  error: document.getElementById("error"),
};

ref.switchButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementById("headerTitle");
  const forgotPasswordElement = document.getElementById("forgotPassword");

  isLoginPage = !isLoginPage;

  if (isLoginPage) {
    headerTitleElement.innerText = "Login";
    // forgotPasswordElement.style.dipslay = "inline";
    forgotPasswordElement.style.visibility = "visible";
    ref.loginButton.value = "Login";
    this.innerText = "Switch to create account page";
  } else {
    headerTitleElement.innerText = "Create new account";
    // forgotPasswordElement.style.dipslay = "none";
    forgotPasswordElement.style.visibility = "hidden";
    ref.loginButton.value = "Sign up";
    this.innerText = "Switch to login page";
  }
});

const showError = (message) => {
  ref.error.style.display = "block";
  ref.error.innerText = message;
  ref.error.style.color = "red";
};

const validateEmail = (emailValue, regex) => {
  return regex;
};

const validatePassword = (passwordValue) => {
  return passwordValue.length > 3;
};

const clearInputs = () => {
  ref.emailField.value = "";
  ref.passwordField.value = "";
};

ref.loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwordValue;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must cointain a value");
  } else {
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        login(emailValue, passwordValue).then();
      } else {
        // register
      }
    } else {
      showError("Incorrect email or password!");
    }
    clearInputs();
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://reqres.in/api/login";
  const loginData = {
    email: emailValue,
    password: passwordValue,
  };

  loginData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const loginConfig = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(""),
  };
}

async function createAccount(emailValue, passwordValue) {}
