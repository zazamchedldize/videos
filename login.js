const MY_EMAIL = "mchedlo@gmail.com";
const MY_PASSWORD = "1234";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    const loading = document.getElementById("loading");

    if (email === MY_EMAIL && password === MY_PASSWORD) {

        loading.style.display = "flex";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);

    } else {
        error.textContent = "არასწორი Email ან Password";
    }
}

/* PASSWORD SHOW / HIDE */
function togglePassword() {
    const pass = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (pass.type === "password") {
        pass.type = "text";
        eye.textContent = "🙈";
    } else {
        pass.type = "password";
        eye.textContent = "👁️";
    }
}