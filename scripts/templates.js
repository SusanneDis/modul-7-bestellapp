
// Main Dishes
function getMainDishesTemplate(maindish, index) {
  return `
<button class="dish-card" onclick="addToCart('main', ${index})">
<img src="${maindish.image}" alt="${maindish.name}">
<h3>${maindish.name}</h3>
<p>CHF ${maindish.price.toFixed(2)}</p>
</button>
`;
}

// Side Dishes
function getSideDishesTemplate(sidedish, index) {
  return `
<button class="dish-card" onclick="addToCart('side', ${index})">
<img src="${sidedish.image}" alt="${sidedish.name}">
<h3>${sidedish.name}</h3>
<p>CHF ${sidedish.price.toFixed(2)}</p>
</button>
`;
}

// Drinks
function getDrinksTemplate(drinks, index) {
  return `
<button class="dish-card" onclick="addToCart('drinks', ${index})">
<img src="${drinks.image}" alt="${drinks.name}">
<h3>${drinks.name}</h3>
<p>CHF ${drinks.price.toFixed(2)}</p>
</button>
`;
}

// Basket

  function getBasketHeaderTemplate() {
  return `
      <div class="basket-header">
        <h2 tabindex="0">Warenkorb</h2>
      </div>
    `;
    }

  function getBasketTemplate(product, index) {
    return `
      <div class="product-list-basket">
        <h3 tabindex="0">${product.name}</h3>
        <div class="amount-price-div">
          <div class="amount-div">
            <button onclick="changeAmount(${index}, -1)">
              <img src="./assets/icons/remove-icon-orange.png" alt="Minus">
            </button>
            <span class="amount">${product.amount}</span>
            <button onclick="changeAmount(${index}, 1)">
              <img src="./assets/icons/plus-icon-orange.png" alt="Plus">
            </button>
          </div>

          <div class="amount-price-div">
            <span>CHF ${(product.price * product.amount).toFixed(2)}</span>
            <button onclick="deleteAmount(${index})">
              <img src="./assets/icons/delete-icon-orange.png" alt="Papierkorb">
            </button>
          </div>
        </div>
      </div>
    `;
  }

