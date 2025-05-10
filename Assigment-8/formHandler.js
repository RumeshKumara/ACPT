const users = [];

export function resetForm() {
    document.getElementById("title").value = "MR";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    const genderChecked = document.querySelector("input[name='gender']:checked");
    if (genderChecked) genderChecked.checked = false;
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("terms").checked = false;
}

export function addUser(event, displayUsers) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const gender = document.querySelector("input[name='gender']:checked");
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const terms = document.getElementById("terms").checked;

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

    users.push({
        title,
        firstName,
        lastName,
        gender: gender.value,
        dob,
        email,
        mobile,
    });

    displayUsers(users);
    resetForm();
}