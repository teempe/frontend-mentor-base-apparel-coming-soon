const formEl = document.querySelector('.form');
const inputEl = document.querySelector('#email');
const erroMsgEl = document.querySelector('.form__input-error-msg');

const renderError = () => {
    inputEl.classList.add('form__input-error');
    erroMsgEl.classList.remove('hidden');
}

const clearError = () => {
    inputEl.classList.remove('form__input-error');
    erroMsgEl.classList.add('hidden');
}

const validateEmail = emailStr => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

    return emailPattern.test(emailStr);
}

const handleFormSubmit = event => {
    event.preventDefault();
    clearError();

    const emailValue = inputEl.value.trim()
    if (validateEmail(emailValue)) {
        console.log(`${emailValue} registered.`);
        return;
    }

    renderError();
}

const handleKeyDownEvent = event => {
        // with Enter submit form
        if (event.key === 'Enter') {
            handleFormSubmit(event);
            return;
        }
    
        // with Escape clear input field
        if (event.key === 'Escape') {
            clearError();
            inputEl.value = '';
            return;
        }
}

formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('keydown', handleKeyDownEvent);