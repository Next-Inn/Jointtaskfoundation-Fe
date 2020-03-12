const ui = new UI();

function eventList() {
    const submitSignUpForm = document.getElementById('#signupForm');

    //trigger the button
    submitSignUpForm.addEventListener('submit', signUpUser);
}

eventList();

async function signUpUser(e) {
    e.preventDefault();


    const Fname = document.querySelector('#firstName').value;
    const Lname = document.querySelector('#lastName').value;
    const email = document.querySelector('#firstName').value;
    const phoneNumber = document.querySelector('#phone').value;
    const userName = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const userName = document.querySelector('#username').value;
}