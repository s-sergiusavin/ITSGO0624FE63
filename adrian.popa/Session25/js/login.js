let isLoginPage = true;

const toggleAuthButton = document.getElementById('toggleAuthButton');
const loginButton = document.getElementById('loginButton');

const emailField = document.getElementById('userInput');
const passwordField = document.getElementById('passwordInput');
const error = document.getElementById('error');

toggleAuthButton.addEventListener('click', function () {
    const headerTitleElement = document.getElementById('headerTitle');
    const forgotPasswordElement = document.getElementById('forgotPassword');

    if (isLoginPage) {
        headerTitleElement.innerText = 'Create new account';
        forgotPasswordElement.style.display = 'none';
        loginButton.value = 'Sign up';
        this.value = 'Switch to login page'
    } else {
        headerTitleElement.innerText = 'Login';
        forgotPasswordElement.style.display = 'inline-block';
        loginButton.value = 'Login';
        this.value = 'Switch to create account page'
    }

    isLoginPage = !isLoginPage;
})

const validateEmail = (value) => {
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
    return !!value.match(regexEmailPattern);
}

const validatePassword = (value) => {
    return value.length > 3;
}

const showError = (message) => {
    error.style.display = 'block';
    error.innerText = message;
    error.style.color = 'red';
}

const clearInputs = () => {
    emailField.value = '';
    passwordField.value = '';
}

loginButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;

    error.style.display = 'none';

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value!');
        return;
    }
    if (!validateEmail(emailValue) || !validatePassword(passwordValue)) {
        showError('Incorrect email or password');
        return;
    }
    clearInputs();
    if (isLoginPage) {
        login(emailValue, passwordValue).then(data => {
            console.log(data);
            window.open('news.html', '_self');
        })
    } else {
        createAccount(emailValue, passwordField).then(data => {
            window.open('login.html', '_self');
        })
    }
});

async function login(emailValue, passwordValue) {
    const loginUrl = 'https://reqres.in/api/login';

    let loginData = {
        email: emailValue,
        password: passwordValue
    };

    loginData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginData)
    };

    const response = await fetch(loginUrl, loginConfig);
    return response.json;
}

async function createAccount(emailValue, passwordValue) {
    const createAccountUrl = 'https://reqres.in/api/register';
    emailValue = 'eve.holt@reqres.in';
    passwordValue = 'pistol';
    
    const registerData = {
        email: emailValue,
        password: passwordValue
    };

    const registerConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    };

    const response = await fetch(createAccountUrl, registerConfig);
    return response.json;
}