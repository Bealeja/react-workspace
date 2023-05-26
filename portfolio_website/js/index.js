document.addEventListener("DOMContentLoaded", function () {
  var showFormButton = document.getElementById("show-form");
  var contactForm = document.getElementById("contact-form");
  var contactMe = document.getElementById("contact-me");

  showFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    contactForm.classList.add("show");
    console.log("Contact form shown!");
  });

  contactMe.addEventListener("click", function (event) {
    event.preventDefault();
    contactForm.classList.add("show");
    console.log("Contact form shown!");
  });
});
