document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById('sign-up');
    const loginForm = document.getElementById('login-form');

   
    if (signUpForm) {
        signUpForm.addEventListener('submit', e => {
            e.preventDefault();
            validateSignUp();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            validateLogin();
        });
    }

    
    const setError = (element, message) => {
        const inputControls = element.parentElement;
        const errorDisplay = inputControls.querySelector('.error');

        if (errorDisplay) {
            errorDisplay.innerText = message;
            inputControls.classList.add('error');
            inputControls.classList.remove('success');
        }
    };

    const setSuccess = element => {
        const inputControls = element.parentElement;
        const errorDisplay = inputControls.querySelector('.error');

        if (errorDisplay) {
            errorDisplay.innerText = '';
            inputControls.classList.add('success');
            inputControls.classList.remove('error');
        }
    };

    const isValidEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Sign-Up Validation
    const validateSignUp = () => {
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');

        if (!firstName || !lastName || !email || !password || !password2) return;

        if (firstName.value.trim() === '') {
            setError(firstName, 'First Name is required');
        } else {
            setSuccess(firstName);
        }

        if (lastName.value.trim() === '') {
            setError(lastName, 'Last Name is required');
        } else {
            setSuccess(lastName);
        }

        if (email.value.trim() === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(email.value.trim())) {
            setError(email, 'Enter a valid email');
        } else {
            setSuccess(email);
        }

        if (password.value.trim() === '') {
            setError(password, 'Password is required');
        } else if (password.value.trim().length < 8) {
            setError(password, 'Password must be at least 8 characters');
        } else {
            setSuccess(password);
        }

        if (password2.value.trim() === '') {
            setError(password2, 'Confirm your password');
        } else if (password2.value.trim() !== password.value.trim()) {
            setError(password2, 'Passwords do not match');
        } else {
            setSuccess(password2);
        }
    };

    // Login Validation
    const validateLogin = () => {
        const loginEmail = document.getElementById('email');
        const loginPassword = document.getElementById('password');

        if (!loginEmail || !loginPassword) return;

        if (loginEmail.value.trim() === '') {
            setError(loginEmail, 'Email is required');
        } else if (!isValidEmail(loginEmail.value.trim())) {
            setError(loginEmail, 'Enter a valid email');
        } else {
            setSuccess(loginEmail);
        }

        if (loginPassword.value.trim() === '') {
            setError(loginPassword, 'Password is required');
        } else {
            setSuccess(loginPassword);
        }
    };
});
