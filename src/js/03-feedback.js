import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");
formRef.addEventListener("input", throttle(onInput, 500));
formRef.addEventListener("submit", onSubmit);

const KEY = "feedback-form-state";

function onInput() {
    const savedData = {
        email: formRef.email.value,
        message: formRef.message.value
    };
    localStorage.setItem(KEY, JSON.stringify(savedData));
};

if (localStorage.getItem(KEY)) {
    formRef.email.value = JSON.parse(localStorage.getItem(KEY)).email;
    formRef.message.value = JSON.parse(localStorage.getItem(KEY)).message;
};

function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(KEY)));
    localStorage.removeItem(KEY);
    e.currentTarget.reset();
};