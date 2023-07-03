document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var workExperience = document.getElementById("workExperience").value;
    var education = document.getElementById("education").value;

    // Generate resume template
    var resumeTemplate = `
      <h2>${fullName}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      
      <h3>Work Experience</h3>
      <p>${workExperience}</p>
      
      <h3>Education</h3>
      <p>${education}</p>
    `;

    // Display the generated resume template
    document.getElementById("resumeTemplate").innerHTML = resumeTemplate;
  });
