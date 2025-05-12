export function displayUsers(users) {
    const displayDiv = document.getElementById("display");
    displayDiv.innerHTML = `
        <h3 style="text-align: center;">Submitted Data</h3>
        ${users
            .map(
                (user, index) => `
                <div style="margin-bottom: 15px; padding: 10px; background-color: #155dfc; border-radius: 10px; color: white; font-family: Arial, sans-serif;">
                    <p><strong>Submission #${index + 1}</strong></p>
                    <p><strong>Title:</strong> ${user.title}</p>
                    <p><strong>First Name:</strong> ${user.firstName}</p>
                    <p><strong>Last Name:</strong> ${user.lastName}</p>
                    <p><strong>Gender:</strong> ${user.gender}</p>
                    <p><strong>Date of Birth:</strong> ${user.dob}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Mobile:</strong> ${user.mobile}</p>
                </div>
            `
            )
            .join("")}
    `;
    displayDiv.style.padding = "10px";
    displayDiv.style.marginTop = "10px";
}