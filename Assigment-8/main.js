import { addUser, resetForm } from './formHandler.js';
import { validateEmail, validateMobile } from './validation.js';
import { displayUsers } from './display.js';

document.getElementById("userForm").onsubmit = (event) => addUser(event, displayUsers);
document.getElementById("email").oninput = (event) => validateEmail(event.target);
document.getElementById("mobile").oninput = (event) => validateMobile(event.target);
document.getElementById("resetButton").onclick = resetForm;