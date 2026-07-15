fetch("http://localhost:3000/api/products")
.then(res => res.json())
.then(products => {

    const container = document.getElementById("featuredProducts");

    container.innerHTML = "";

    products.slice(0,4).forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <span class="offer-badge">20% OFF</span>

                <img src="images/${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐⭐⭐⭐⭐ <span>(4.8)</span>
                </div>

                <h2>$${product.price}</h2>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

    });

})
function addToCart(id) {

    fetch("http://localhost:3000/api/cart", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            productId: id
        })

    })

    .then(res => res.json())
    .then(data => {
        alert(data.message);
    })
    .catch(console.error);

}

