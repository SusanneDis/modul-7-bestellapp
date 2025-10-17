

let cart = [];
let deliveryCost = 8;


function init() {
  loadFromLocalStorage();
  renderMainDishes(),
  renderSideDishes(),
  renderDrinks();
  renderCart();
}

// Local Storage
function loadFromLocalStorage() {
const storedCart = localStorage.getItem('cart');
if (storedCart) {
  cart = JSON.parse(storedCart);
}
}

function saveToLocalStorage() {
localStorage.setItem('cart', JSON.stringify(cart));
}

// Main-Dishes
function renderMainDishes() {

  let container = document.getElementById('render-main-dishes');
  container.innerHTML = "";

  for (let index = 0; index < mainDishes.length; index++) {
    const maindish = mainDishes[index];

    container.innerHTML += getMainDishesTemplate(maindish, index);
  }
}

// Side-Dishes
function renderSideDishes() {

  let sdContainer = document.getElementById('render-side-dishes');
  sdContainer.innerHTML = "";

  for (let index = 0; index < sideDishes.length; index++) {
    const sidedish = sideDishes[index];

    sdContainer.innerHTML += getSideDishesTemplate(sidedish, index);
  }
}

// Drinks
function renderDrinks() {

  let drinksContainer = document.getElementById('render-drinks');
  drinksContainer.innerHTML = "";

  for (let index = 0; index < drinksArray.length; index++) {
    const drinks = drinksArray[index];

    drinksContainer.innerHTML += getDrinksTemplate(drinks, index);
  }
}

// Add to cart

// Check if main, side or drinks
function addToCart(type, index) {

  let product;
  if (type === 'main') {
    product = mainDishes[index];
  } else if (type === 'side') {
    product = sideDishes[index];
  } else if (type === 'drinks') {
    product = drinksArray[index];
  } else {
    return;
  }


// Checks if item already exists
  let itemFound = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === product.name) {
      cart[i].amount++;
      itemFound = true;
      break;
    }
  }
  if (!itemFound) {
    cart.push({
      name: product.name,
      price: product.price,
      amount: 1
    });
  }
  renderCart();
  saveToLocalStorage()
}


// Cart
function renderCart() {
  let basket = document.getElementById('basket-div');
  basket.innerHTML = "";

  basket.innerHTML += getBasketHeaderTemplate();

  for (let i = 0; i < cart.length; i++) {
    basket.innerHTML += getBasketTemplate(cart[i], i);
  }
  
  if (cart.length > 0) {
    basket.innerHTML += renderCartSummary();
  }
}


function changeAmount(index, change) {
  cart[index].amount += change;

    if (cart[index].amount <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
  saveToLocalStorage();
}


function deleteAmount(index) {
  cart.splice(index, 1);
  renderCart();
  saveToLocalStorage();
}


function renderCartSummary() {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].amount;
  }
  let total = subtotal + deliveryCost;

  return `
    <div class="summary-div">
      <div class="price-distance">
        <p>Zwischensumme</p>
        <span>CHF ${subtotal.toFixed(2)}</span>
      </div>
      <div class="price-distance">
        <p>Lieferkosten</p>
        <span>CHF  ${deliveryCost.toFixed(2)}</span>
      </div>
      <div class="price-distance">
        <p><strong>Gesamtkosten</strong></p>
        <span><strong>CHF ${total.toFixed(2)}</strong></span>
      </div>
    </div>
  `;
}