const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
.then(res => res.json())
.then(product => {

    document.getElementById("product-details").innerHTML = `

    <div class="details">

        <img src="images/${product.image}">

        <div>

            <h1>${product.name}</h1>

            <p>${product.description}</p>

            <h2>$${product.price}</h2>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        </div>

    </div>

    `;

});

function addToCart(id){

    fetch("http://localhost:3000/api/cart",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            productId:id
        })

    })

    .then(res=>res.json())

    .then(data=>alert(data.message));

}