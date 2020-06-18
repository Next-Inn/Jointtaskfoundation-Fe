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


    if(!Fname || !Lname || !email || !phoneNumber || !password || !confirmPassword || !password || !userName)  {
        ui.printMessage('Fill all Fields!!!', 'alert-danger');
    }else if (password != confirmPassword) {
        ui.printMessage('Password Must be Equal to Confirm Password', 'alert-danger');
    }else {
        ui.printMessage('Thank You for Your Info, Processing!', 'alert-success');
        
        // Get user details
}