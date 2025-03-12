// grocery.js

// Function to add a product to the cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length; // Get the current cart count
    document.getElementById('cart-btn').innerText = `Cart (${cartCount})`;
}

// Initialize cart count on page load
updateCartCount();

// Add event listener for the "Add to Cart" button on the apples page
if (document.getElementById('add-to-cart')) {
    document.getElementById('add-to-cart').onclick = function() {
        const product = { 
            id: 1, 
            name: 'Fresh Apples', 
            price: 9.00, 
            image: 'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834' // Product image URL
        };
        addToCart(product);
    };
}

// Add event listener for the "Add to Cart" button on the meat page
if (document.getElementById('add-to-cart')) {
    document.getElementById('add-to-cart').onclick = function() {
        const product = { 
            id: 2, 
            name: 'Fresh Meat', 
            price: 15.00, 
            image: 'https://live-production.wcms.abc-cdn.net.au/d4cad1b635352e3a57e8a13d85d7fcb3?impolicy=wcms_crop_resize&cropH=1209&cropW=2150&xPos=0&yPos=112&width=862&height=485' // Product image URL
        };
        addToCart(product);
    };
}
