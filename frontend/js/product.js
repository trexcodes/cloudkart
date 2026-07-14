let allProducts = [];

fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(products => {

        allProducts = products;

        displayProducts(products);

    })
    .catch(err => console.error(err));

function displayProducts(products) {

    const container = document.getElementById("product-list");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <img src="images/${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <h4>$${product.price}</h4>

               <div class="buttons">

    <button onclick="addToCart(${product.id})">
        Add to Cart
    </button>

    <button onclick="addToWishlist(${product.id})">
        ❤️ Wishlist
    </button>

</div>
            </div>
        `;

    });

}

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

    .catch(err => console.error(err));

}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(keyword)
        );

        displayProducts(filteredProducts);

    });

}
const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        const category = categoryFilter.value;

        if (category === "All") {
            displayProducts(allProducts);
            return;
        }

        const filtered = allProducts.filter(product =>
            product.category === category
        );

        displayProducts(filtered);

    });

}
function addToWishlist(id){

    fetch("http://localhost:3000/api/wishlist",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            user_id:1,
            product_id:id

        })

    })

    .then(res=>res.json())

    .then(data=>{

        alert(data.message);

    });

}