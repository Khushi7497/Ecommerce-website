


const products = [
  {
    id: 1,
    name: "Shoes",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    name: "Watch",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1695345272166-4efd76dd7a21?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "T-shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1716541424893-734612ddcabb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function deleteFromCart(index) {
  cart.splice(index, 1); // remove 1 item at the given index
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const cartItems = document.getElementById("cart-items");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total").textContent = total.toFixed(2);

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - $${item.price.toFixed(2)}</span>
      <button class="delete-btn" onclick="deleteFromCart(${index})">Delete</button>
    `;
    cartItems.appendChild(li);
  });
}

renderProducts();
