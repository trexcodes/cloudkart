const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {

            alert(data.message);

            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location = "index.html";
            }

        })
        .catch(console.error);

    });
}

// REGISTER
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match");
            return;
        }

        fetch("http://localhost:3000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname: fullname.value,
                email: email.value,
                phone: phone.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {

            alert(data.message);

            if (data.message === "Registration Successful") {
                window.location = "login.html";
            }

        })
        .catch(console.error);

    });

}