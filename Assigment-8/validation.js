export function validateEmail(input) {
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
}

export function validateMobile(input) {
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
}