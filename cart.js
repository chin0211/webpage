// cart.js

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item'); // Add a class for styling

            // Create HTML for the item
            itemElement.innerHTML = ` 
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price}</p>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price;
        });

        totalPriceContainer.textContent = `Total Price: $${totalPrice}`;
    }
});


