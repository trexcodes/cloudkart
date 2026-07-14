const name = document.getElementById("name");
const description = document.getElementById("description");
const price = document.getElementById("price");
const category = document.getElementById("category");
const image = document.getElementById("image");
const stock = document.getElementById("stock");
document.getElementById("productForm").addEventListener("submit", function(e){

    e.preventDefault();

    fetch("http://localhost:3000/api/products",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({

            name:name.value,
            description:description.value,
            price:price.value,
            category:category.value,
            image:image.value,
            stock:stock.value

        })

    })

    .then(res=>res.json())

    .then(data=>{

        alert(data.message);

        location.reload();

    })

    .catch(console.error);

});
fetch("http://localhost:3000/api/products")
.then(res => res.json())
.then(products => {

    const table = document.querySelector("#productTable tbody");

    table.innerHTML = "";

    products.forEach(product => {

        table.innerHTML += `

        <tr>

            <td>${product.id}</td>

            <td>
                <img src="images/${product.image}" width="60">
            </td>

            <td>${product.name}</td>

            <td>$${product.price}</td>

            <td>${product.stock}</td>

            <td>

                <button onclick="editProduct(${product.id})">
                    Edit
                </button>

                <button onclick="deleteProduct(${product.id})">
                    Delete
                </button>

            </td>

        </tr>

        `;

    });

})
function deleteProduct(id) {

    if (confirm("Are you sure you want to delete this product?")) {

        fetch(`http://localhost:3000/api/products/${id}`, {

            method: "DELETE"

        })
        .then(res => res.json())
        .then(data => {

            alert(data.message);

            location.reload();

        })
        .catch(console.error);

    }

}
