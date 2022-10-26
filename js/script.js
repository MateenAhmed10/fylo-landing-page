// Get Started
let form = document.getElementById("form");
let email = document.getElementById("email");
let formAlert = document.querySelector(".form__alert");

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail(email.value)) {
        formAlert.style.display = "none";
        email.style.border = "1px solid hsl(243, 87%, 12%)";
        email.value = "";
    }
    else {
        formAlert.style.display = "block";
        email.style.border = "1px solid red";
    }
})


//  Access Form
let accessForm = document.getElementById("access__form");
let accessEmail = document.querySelector(".accessEmail");
let accessFormAlert = document.querySelector(".access__form-alert");

accessForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail(accessEmail.value)) {
        accessFormAlert.style.display = "none";
        accessEmail.style.border = "1px solid hsl(243, 87%, 12%)"
        accessEmail.value = "";
    }
    else {
        accessFormAlert.style.display = "block";
        accessEmail.style.border = "1px solid red";
    }
})