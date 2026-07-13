document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const address = document.querySelectorAll('input[type="text"]')[1].value;

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
        window.location.href = "index.html";
    })
    .catch(console.error);
});