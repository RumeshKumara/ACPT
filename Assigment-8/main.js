function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    const genderChecked = document.querySelector("input[name='gender']:checked");
    if (genderChecked) genderChecked.checked = false;
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("terms").checked = false;
}

function addUser(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById("title").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const terms = document.getElementById("terms").checked;

    // Validate inputs
    if (
        !title ||
        !firstName ||
        !lastName ||
        !gender ||
        !dob ||
        !email ||
        !mobile ||
        !terms
    ) {
        alert("Please fill in all required details.");
        return;
    }

    // Display submitted data
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = `
        <h3 style="text-align: center;">Submitted Data</h3>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Gender:</strong> ${gender.value}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
    `;
    displayDiv.style.padding = "10px";
    displayDiv.style.marginTop = "10px";
    displayDiv.style.backgroundColor = "#155dfc";
    displayDiv.style.borderRadius = "10px";
    displayDiv.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    displayDiv.style.fontFamily = "Arial, sans-serif";
    displayDiv.style.color = "white";
    displayDiv.style.fontSize = "16px";
    displayDiv.style.lineHeight = "1.5";
    displayDiv.style.textAlign = "left";
    displayDiv.style.width = "30rem";
    displayDiv.style.margin = "20px auto";

    // Clear the form fields
    resetForm();
}

// Add dynamic validation for email and mobile fields
function validateEmail(input) {
    const email = input.value.trim();
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        input.style.borderColor = "red";
        emailError.innerText = "invalid email";
        emailError.style.color = "red";
    } else {
        input.style.borderColor = "green";
        emailError.innerText = "valid email";
        emailError.style.color = "green";
    }
};

function validateMobile(input) {
    const mobile = input.value.trim();
    const mobileError = document.getElementById("mobile-error");

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        input.style.borderColor = "red";
        mobileError.innerText = "invalid mobile";
        mobileError.style.color = "red";
    } else {
        input.style.borderColor = "green";
        mobileError.innerText = "valid mobile";
        mobileError.style.color = "green";
    }
};

// Attach the function directly to the form's `onsubmit` attribute in the HTML file.
