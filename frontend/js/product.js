fetch("http://localhost:3000/api/products")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img src="images/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <h4>$${product.price}</h4>
         <button onclick="addToCart(${product.id})">Add to Cart</button>        </div>
      `;
    });
  })
  .catch(err => console.error(err));
function addToCart(id) {
    fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId: id })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    })
    .catch(err => console.error(err));
}