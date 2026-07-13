fetch("http://localhost:3000/api/cart")
  .then(res => res.json())
  .then(cart => {
    const container = document.getElementById("cart-items");

    if (cart.length === 0) {
      container.innerHTML = "<h2>Your cart is empty.</h2>";
      return;
    }

    container.innerHTML = "";

    cart.forEach(item => {
      container.innerHTML += `
        <div class="cart-item">
          <img src="images/${item.image}" width="100">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
        </div>
      `;
    });
  })
  .catch(console.error);