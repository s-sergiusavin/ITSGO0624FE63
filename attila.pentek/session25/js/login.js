let isLoginPage = true;

const toggleAuthButton = document.getElementById("toggleAuthButton");
const loginButton = document.getElementById("loginButton");

const emailField = document.getElementById("userInput");
const passwordField = document.getElementById("passwordInput");
const error = document.getElementById("error");

toggleAuthButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementById("headerTitle");
  const forgotPasswordElement = document.getElementById("forgotPassword");

  if (isLoginPage) {
    headerTitleElement.innerText = "Create new account";
    forgotPasswordElement.style.display = "none";
    loginButton.value = "Sign up";
    this.value = "Switch to login page";
  } else {
    headerTitleElement.innerText = "Login";
    forgotPasswordElement.style.display = "inline-block";
    loginButton.value = "Login";
    this.value = "Switch to create account page";
  }

  isLoginPage = !isLoginPage;
});

const showError = (message) => {
  error.style.display = "block";
  error.innerText = message;
  error.style.color = "red";
};

const validateEmail = (value, regex) => {
  console.log(value.match(regex));

  return !!value.match(regex);
};

const validatePassword = (value) => {
  return value.length > 3;
};

const clearInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  error.style.display = "none";

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value!");
  } else {
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        login(emailValue, passwordValue).then((data) => {
          console.log(data);
          clearInputs();
          window.open("news.html", "_self");
        });
      } else {
        createAccount(emailValue, passwordValue).then((data) => {
          console.log(data);
          clearInputs();
          window.open("login.html", "_self");
        });
      }
    } else {
      showError("Incorrect email or password!");
      clearInputs();
    }
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://reqres.in/api/login";

  let loginData = {
    email: emailValue,
    password: passwordValue,
  };

  loginData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const loginConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  };

  const response = await fetch(loginUrl, loginConfig);

  return response.json;
}

async function createAccount(emailValue, passwordValue) {
  const createAccountUrl = "https://reqres.in/api/register";
  emailValue = "eve.holt@reqres.in";
  passwordValue = "cityslicka";

  const registerData = {
    email: emailValue,
    password: passwordValue,
  };

  const registerConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  };

  const response = await fetch(createAccountUrl, registerConfig);

  return response.json();
}
