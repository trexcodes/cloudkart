document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const pincode = document.getElementById("pincode").value;
    const payment = document.getElementById("payment").value;

    fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            address
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        window.location.href = "order-success.html";
    })
    .catch(console.error);
});