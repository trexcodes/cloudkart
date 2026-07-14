fetch("http://localhost:3000/api/orders")

.then(res => res.json())

.then(orders => {

    const list = document.getElementById("orderList");

    if(orders.length===0){

        list.innerHTML="<h2>No Orders Yet</h2>";

        return;

    }

    orders.forEach(order=>{

        list.innerHTML+=`

        <div class="order-card">

            <h3>${order.customer_name}</h3>

            <p>${order.email}</p>

            <p>${order.address}</p>

            <small>${order.order_date}</small>

        </div>

        `;

    });

});