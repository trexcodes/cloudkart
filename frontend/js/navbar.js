// Check if user is logged in
const user = JSON.parse(localStorage.getItem("user"));

const loginMenu = document.getElementById("loginMenu");
const profileMenu = document.getElementById("profileMenu");
const userName = document.getElementById("userName");

// Show Profile if logged in
if (user) {

    if (loginMenu) {
        loginMenu.style.display = "none";
    }

    if (profileMenu) {
        profileMenu.style.display = "block";
    }

    if (userName) {
        userName.innerHTML = "👤 " + user.fullname + " ▼";
    }

} else {

    if (loginMenu) {
        loginMenu.style.display = "block";
    }

    if (profileMenu) {
        profileMenu.style.display = "none";
    }

}

// Logout function
function logout() {

    localStorage.removeItem("user");
    window.location.href = "login.html";

}