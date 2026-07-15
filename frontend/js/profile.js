const user = JSON.parse(localStorage.getItem("user"));

if(!user){

window.location.href="login.html";

}

document.getElementById("fullname").innerHTML=user.fullname;

document.getElementById("email").innerHTML="📧 "+user.email;

document.getElementById("phone").innerHTML="📱 "+user.phone;

document.getElementById("navName").innerHTML=user.fullname;

function logout(){

localStorage.removeItem("user");

window.location.href="login.html";

}