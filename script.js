const products = [
    {
      name: "Classic Notebook",
      price: 5.99,
      image: "https://th.bing.com/th/id/OIP.7Rcz1lddylIkFzSqnjhoiQHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Pen Set (10 colors)",
      price: 3.49,
      image: "https://th.bing.com/th/id/OIP.TETlL8GkIEpgitt-uCa2pgHaE3?w=287&h=189&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Sticky Notes (Pack of 3)",
      price: 2.25,
      image: "https://th.bing.com/th/id/OIP.W51d89tqwMSF5-lkvPMMAgHaH_?w=204&h=220&c=7&r=0&o=5&pid=1.7"
    },
    {
      name: "Mini Highlighter Set",
      price: 4.50,
      image: "https://th.bing.com/th/id/OIP.j-o1g08jkKzrMe6oZfMnIQHaHa?w=213&h=213&c=7&r=0&o=5&pid=1.7"
    }
  ];
  
  let cart = [];
  let selectedProduct = null;
  
  // Render products on the page
  function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";
    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="showProductDetail(${index})"/>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>$${product.price.toFixed(2)}</p>
          <button class="add-btn" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  // Show product details in a modal
  function showProductDetail(index) {
    const product = products[index];
    selectedProduct = product;
    
    // Set product details
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-price').innerText = `$${product.price.toFixed(2)}`;
    document.getElementById('detail-description').innerText = `This is a great product for your stationery needs!`;
    document.getElementById('detail-image').src = product.image;
    
    // Show the modal
    document.getElementById('product-detail-modal').style.display = 'block';
  }
  
  // Close product detail modal
  function closeProductDetail() {
    // Hide the modal
    document.getElementById('product-detail-modal').style.display = 'none';
  }
  
  // Add selected product to cart from detail modal
  function addToCartFromDetail() {
    if (selectedProduct) {
      cart.push(selectedProduct);
      updateCartUI();
      closeProductDetail();
    }
  }
  
  // Add product to cart from the main page
  function addToCart(index) {
    cart.push(products[index]);
    updateCartUI();
  }
  
  // Update the cart UI
  function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartList.appendChild(li);
    });
  }
  
  // Toggle cart modal visibility
  function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close cart modal
  function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
  }
  
  // Initial load of products
  renderProducts();
  