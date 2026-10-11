// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    contactForm.reset();

});
