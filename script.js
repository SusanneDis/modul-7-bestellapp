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
  const basket = document.getElementById('basket-div');
  basket.innerHTML = "";

  basket.innerHTML += getBasketHeaderTemplate();

  renderCartContent('basket-div');
}


function changeAmount(index, change) {
  cart[index].amount += change;

  if (cart[index].amount <= 0) {
    cart.splice(index, 1);
  }
  renderCart();

  if (document.getElementById('cart-dialog').open) {
    renderCartOverlay();
  }
  saveToLocalStorage();
}


function deleteAmount(index) {
  cart.splice(index, 1);

  renderCart();

  if (document.getElementById('cart-dialog').open) {
    renderCartOverlay();
  }
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
    <div class="send-order-button-div">
    <button class="basket-button2" onclick="sendOrder()">Jetzt bestellen</button>
    </div>
  `;
}


// dialog
function openCartDialog() {
  const dialog = document.getElementById('cart-dialog');

  renderCartContent('cart-dialog-content');

  dialog.showModal();

  const basketButton = document.querySelector('.basket-button');
  basketButton.setAttribute('aria-expanded', 'true');
}


function renderCartOverlay() {
  renderCartContent('cart-dialog-content');
}


function closeCartDialog() {
  const dialog = document.getElementById('cart-dialog');
  dialog.close();

  const basketButton = document.querySelector('.basket-button');
  basketButton.setAttribute('aria-expanded', 'false');
}

const closeDialogRef = document.getElementById("cart-dialog");
closeDialogRef.addEventListener("click", (e) => {
  if (e.target === closeDialogRef) {
    closeCartDialog();
  }
});


// check if baskets empty, show text
function renderCartContent(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (cart.length === 0) {
  if (containerId === 'basket-div') {
  container.innerHTML = getBasketHeaderTemplate();
  }
  container.innerHTML += getEmptyBasketTemplate();
  } else {
  if (containerId === 'basket-div') {
  container.innerHTML += getBasketHeaderTemplate();
  }
  for (let index = 0; index < cart.length; index++) {
  container.innerHTML += getBasketTemplate(cart[index], index);
  }
  container.innerHTML += renderCartSummary();
  }
  } 


function sendOrder() {
cart = [];
saveToLocalStorage();

renderCartContent('basket-div');
renderCartContent('cart-dialog-content');

const orderDialog = document.getElementById('order-dialog');
const orderContent = document.getElementById('order-dialog-content');
orderContent.innerHTML = getOrderSendTemplate();

const cartDialog = document.getElementById('cart-dialog');
if (cartDialog.open) cartDialog.close();

orderDialog.showModal();
}


function closeOrderDialog() {
  const orderDialog = document.getElementById('order-dialog');
  orderDialog.close();
}

