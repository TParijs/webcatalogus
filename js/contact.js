const nameForm = document.querySelector('.name-form'); // select the input with the class name-form
const emailForm = document.querySelector('.email-form'); // select the input with the class email-form
const questionForm = document.querySelector('.question-form'); // select the input with the class question-form

const sendButton = document.querySelector('.send-button'); // select the button with the class send-button

sendButton.addEventListener('click', () => { // add an event listener to the button
    // check if the input fields are empty
    if (nameForm.value == '' || emailForm.value == '' || questionForm.value == '') {
        return alert('Please fill in all fields');
    }

    // check if the input fields are valid
    if (nameForm.value.length > 30) {
        return alert('Name is too long');
    } else if (nameForm.value.length < 3) {
        return alert('Name is too short');
    } else if (emailForm.value.indexOf('@') == -1) {
        return alert('Email is invalid');
    } else if (questionForm.value.length > 500) {
        return alert('Question is too long');
    }

    // alert that the message has been sent
    alert('Your message has been sent');
});