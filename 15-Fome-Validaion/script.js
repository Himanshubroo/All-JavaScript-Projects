var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validteName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="bi bi-check-circle-fill">Valid</i>';
    return true;

}
function validtePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone No is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone No should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }
    phoneError.innerHTML = '<i class="bi bi-check-circle-fill">Valid</i>';
    return true;
}
function validteEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-check-circle-fill">Valid</i>';
    return true;
}

function validteMessage() {
    var message = document.getElementById('contact-message').value;

    var required = 10;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + 'More characters required';
        return false;
    }

    messageError.innerHTML = '<i class="bi bi-check-circle-fill">Valid</i>';
    return true;

}

function validteForm() {
    if (!validteName() || !validtePhone() || !validteEmail() || !validteMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    
}