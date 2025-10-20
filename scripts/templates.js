
// Main Dishes
function getMainDishesTemplate(maindish, index) {
  return `
<button class="dish-card"
onclick="addToCart('main', ${index})"
aria-label="Zu Warenkorb hinzufügen: ${maindish.name}">
<img src="${maindish.image}" alt="${maindish.name}">
<h3>${maindish.name}</h3>
<p>CHF ${maindish.price.toFixed(2)}</p>
</button>
`;
}

// Side Dishes
function getSideDishesTemplate(sidedish, index) {
  return `
<button class="dish-card" onclick="addToCart('side', ${index})"
aria-label="Zum Warenkorb hinzufügen: ${sidedish.name}" tabindex="0">
<img src="${sidedish.image}" alt="${sidedish.name}">
<h3>${sidedish.name}</h3>
<p>CHF ${sidedish.price.toFixed(2)}</p>
</button>
`;
}

// Drinks
function getDrinksTemplate(drinks, index) {
  return `
<button class="dish-card" onclick="addToCart('drinks', ${index})" 
aria-label="Zum Warenkorb hinzufügen: ${drinks.name}" tabindex="0">
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
            <button onclick="changeAmount(${index}, -1)"
            aria-label="Menge verringern von ${product.name}">            
              <img src="./assets/icons/remove-icon-orange.png" alt="Minus">
            </button>
            <span class="amount" tabindex="0">${product.amount}</span>
            <button onclick="changeAmount(${index}, 1)" aria-label="Menge erhöhen von ${product.name}">
              <img src="./assets/icons/plus-icon-orange.png" alt="Plus">
            </button>
          </div>

          <div class="amount-price-div">
            <span tabindex="0">CHF ${(product.price * product.amount).toFixed(2)}</span>
            <button onclick="deleteAmount(${index})" aria-label="${product.name} aus Warenkorb entfernen">
              <img src="./assets/icons/delete-icon-orange.png" alt="Papierkorb">
            </button>
          </div>
        </div>
      </div>
    `;
  }

function getEmptyBasketTemplate() {
return `
      <div class="basket-header">
        <h2 tabindex="0">Warenkorb</h2>
      </div>
      <p class="text-empty-basket">Dein Warenkorb ist noch leer.</p>
      `;
}

