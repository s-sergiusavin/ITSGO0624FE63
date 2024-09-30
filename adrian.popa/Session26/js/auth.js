let isLoginPage = true;

// const switchAccount = document.querySelector('.registerButton');
// const loginButton = document.querySelector('.loginButton');
// const emailField = document.getElementById('username');
// const passwordField = document.getElementById('password');
// const error = document.getElementById('error');

const ref = {
    switchAccount: document.querySelector('.registerButton'),
    loginButton: document.querySelector('.loginButton'),
    emailField: document.getElementById('username'),
    passwordField: document.getElementById('password'),
    error: document.getElementById('error')
}

ref.switchAccount.addEventListener('click', function () {
    const headerTitleElem = document.getElementById('headerTitle');
    const forgotPasswordElem = document.getElementById('forgotPassword');

    isLoginPage = !isLoginPage;

    clearInputs();

    if (isLoginPage) {
        headerTitleElem.innerText = 'Login';
        // forgotPasswordElem.style.display = 'inline';
        forgotPasswordElem.style.visibility = 'visible';
        ref.loginButton.value = 'Login';
        this.innerText = 'Create an account';
    } else {
        headerTitleElem.innerText = 'Create new account';
        // forgotPasswordElem.style.display = 'none';
        forgotPasswordElem.style.visibility = 'hidden';
        ref.loginButton.value = 'Sign up';
        this.innerText = 'Switch to login';
    }
});

const showError = message => {
    ref.error.style.display = 'block';
    ref.error.innerText = message;
    ref.error.style.color = 'red';
}

const validateEmail = (emailValue, regex) => !!emailValue.match(regex);

const validatePassword = (passwordValue) => passwordValue.length > 3;

const clearInputs = () => {
    ref.emailField.value = '';
    ref.passwordField.value = '';
}

ref.loginButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = ref.emailField.value;
    const passwordValue = ref.passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    ref.error.display = 'none';

    if (emailValue === '' || passwordValue === '') {
        showError("All fields are required and must contain a value!");
        return;
    }

    if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
        if (isLoginPage) {
            login(emailValue, passwordValue).then(data => {
                console.log(data);
                window.open('pages/feed.html', '_self');
            })
        } else {
            createAccount(emailValue, passwordValue).then(data => {
                console.log(data);
                window.open('login.html', '_self');
            })
        }
    } else {
        showError('Incorrect email or password');
    }
    clearInputs();
})

async function login(emailValue, passwordValue) {
    const loginURL = 'https://reqres.in/api/login';
    let loginData = {
        email: emailValue,
        passwordValue: passwordValue
    }

    loginData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    };

    const response = await fetch(loginURL, loginConfig);

    return response.json();
}

async function createAccount(emailValue, passwordValue) {
    const registerURL = 'https://reqres.in/api/register';
    let registerData = {
        email: emailValue,
        passwordValue: passwordValue
    }

    registerData = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }

    const registerConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    };

    const response = await fetch(registerURL, loginConfig);

    return response.json();
}