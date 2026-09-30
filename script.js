const form = document.querySelector('.sub-form');
const email = document.querySelector('.email');
const error = document.querySelector('.error-msg');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = email.value.trim();

    if (value === '') {
        error.textContent = 'Whoops! It looks like you forgot to add your email';
        email.classList.add('invalid');
    } else if (!value.includes('@') || !value.includes('.')) {
        error.textContent = 'Please provide a valid email address';
        email.classList.add('invalid');
    } else {
        error.textContent = '';
        email.classList.remove('invalid');
    }
});