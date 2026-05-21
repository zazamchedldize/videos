const USERS = [
    {
        email: "mchedlo@gmail.com",
        password: "1234",
        role: "Admin"
    },
    {
        email: "member@gmail.com",
        password: "123",
        role: "User"
    }
];

function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
    const loading = document.getElementById("loading");

    const user = USERS.find(u =>
        u.email === email && u.password === password
    );

    if (user) {

        // save session
        localStorage.setItem("userRole", user.role);
        localStorage.setItem("userEmail", user.email);

        loading.style.display = "flex";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);

    } else {
        error.textContent = "პაროლსაც ვერ იმახსოვრებ?";
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
