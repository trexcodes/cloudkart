fetch("http://localhost:3000/api/cart")
.then(res => res.json())
.then(cart => {

    const container = document.getElementById("cart-items");

    container.innerHTML = "";

    if(cart.length===0){

        container.innerHTML="<h2>Your cart is empty.</h2>";
        return;
    }

    cart.forEach(item=>{

        container.innerHTML+=`

        <div class="cart-item">

            <img src="images/${item.image}" width="120">

            <h3>${item.name}</h3>

            <p>$${item.price}</p>

            <button onclick="removeProduct(${item.id})">

                Remove

            </button>

        </div>

        `;

    });

});

function removeProduct(id){

    fetch(`http://localhost:3000/api/cart/${id}`,{

        method:"DELETE"

    })

    .then(res=>res.json())

    .then(data=>{

        alert(data.message);

        location.reload();

    });

}