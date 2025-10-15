let menuDishes = [
  {
    "name": "Pizza Margherita",
    "price": 22.00,
    "description": "Unser Klassiker mit sonnengereifte Tomaten, cremigem Buffola-Mozzarella und frischem Basilikum",
    "image": "./assets/img/pizza-margherita.jpg"
  },
  {
    "name": "Pizza Salami",
    "price": 26.00,
    "description": "Knuspriger Boden, würzige Salami und ausgeählter Buffola-Mozzarella - ein herzhafter Favorit",
    "image": "./assets/img/pizza-salami.jpg"
  },
  {
    "name": "Pizza Funghi",
    "price": 25.00,
    "description": "Belegt mit frischen Champions, feinem Mozarella und einer leichten Knoblauchnote",
    "image": "./assets/img/pizza-funghi.jpg"
  },
  {
    "name": "Pizza Contadina",
    "price": 24.00,
    "description": "Unser Geheimntipp - feinster Pizzateig mit Oliven, Funghi, Salami, Zwiebeln und frischen Kräutern",
    "image": "./assets/img/pizza-salami-olive.jpg"
  },
  {
    "name": "Cheeseburger Countrstyle",
    "price": 24.00,
    "description": "Saftiges Rindfleisch, geschmolzener Käse, Zwiebeln udn BBQ-Note - rustikal und herzhaft",
    "image": "./assets/img/cheese-burger-country.jpg"
  },
  {
    "name": "Double-Cheeseburger",
    "price": 23.00,
    "description": "Zwei Lagen Rindfleisch, doppelt Käse und unsere Special-Sauce - doppelt Genuss",
    "image": "./assets/img/double-cheese-burger.jpg"
  },
  {
    "name": "Beef und Fried-Onion Burger",
    "price": 22.50,
    "description": "Frittierte Zwiebelringe, sagtiges Rindfleisch und unsere Speziasauce vollenden diesen Burger zum Genuss",
    "image": "./assets/img/beef-and-onion-burger.jpg"
  },
  {
    "name": "Grüner Salat",
    "price": 12.00,
    "description": "Frischer Blattsalat mit leichtem Dressing und frischen Kräutern",
    "image": "./assets/img/green-salad.jpg"
  },
  {
    "name": "Gemischter Salat",
    "price": 15.00,
    "description": "Bunter Mix aus Blattsalat, Tomaten, Gurken und Karrotten",
    "image": "./assets/img/mixed-salad.jpg"
  },
  {
    "name": "Portion Pommes",
    "price": 9.00,
    "description": "Goldene, knusprige Pommes",
    "image": "./assets/img/pommes-frites.jpg"
  }
];


function renderMainDishes() {

  let container = document.getElementById('render-main-dishes');
  container.innerHTML = "";

  for (let index = 0; index < menuDishes.length; index++) {
    const dish = menuDishes[index];

    container.innerHTML += getMainDishesTemplate(dish, index);
  }
}

function getMainDishesTemplate(dish, index) {
  return `
<button class="dish-card" onclick="addToCart(${index})">
<img src="${dish.image}" alt="${dish.name}">
<h3>${dish.name}</h3>
<p>CHF ${dish.price.toFixed(2)}</p>
</button>
`;
}


let cart = [];
let deliveryCost = 5;

function addToCart(index) {
  const product = menuDishes[index];
  let found = false;

  // Prüfen, ob Produkt schon im Warenkorb ist
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === product.name) {
      cart[i].amount++; // Menge erhöhen
      found = true;
      break;
    }
  }

  // Wenn Produkt noch nicht vorhanden → neu hinzufügen
  if (!found) {
    cart.push({
      name: product.name,
      price: product.price,
      amount: 1
    });
  }
  renderCart();
}


function renderCart() {
  let basket = document.getElementById('basket-div');
  basket.innerHTML = "";

   basket.innerHTML += `
    <div class="basket-header">
      <h2>Warenkorb</h2>
    </div>
  `;

   // Produkte im Warenkorb
  for (let i = 0; i < cart.length; i++) {
    basket.innerHTML += getBasketTemplate(cart[i], i);
  }

  // Gesamtsumme + Lieferung
  if (cart.length > 0) {
    basket.innerHTML += renderCartSummary();
  }
}

function getBasketTemplate(product, index) {
  return `
     <div class="product-list-basket">
       <h3>${product.name}</h3>
       <div class="amount-price-div">
        <div class="amount-div">
          <button onclick="changeAmount(${index}, -1)">
            <img src="./assets/icons/remove-icon-orange.png" alt="Minus">
          </button>
          <span class"amount">${product.amount}</span>
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

function changeAmount(index, change) {
  cart[index].amount += change;

  // Wenn Menge 0 → löschen
  if (cart[index].amount <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function deleteAmount(index) {
  cart.splice(index, 1);
  renderCart();
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