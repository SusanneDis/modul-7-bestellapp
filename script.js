let mainDishes = [
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

];

let sideDishes = [
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
  },
{
    "name": "Potatoe Wedges",
    "price": 9.00,
    "description": "Würzig-knusprige Wedges",
    "image": "./assets/img/potatoe-wedges.jpg"
  }
]

let drinksArray = [
{
    "name": "Cola",
    "price": 4.00,
    "description": "Erfrischende Cola mit natürlichen Geschmackstoffen",
    "image": "./assets/img/cola.jpg"
  },
{
    "name": "Orangen-Limonade",
    "price": 4.00,
    "description": "Fruchtige Orangen-Limonade mit natürlichen Zutaten",
    "image": "./assets/img/orangen-limonade.jpg"
  },
{
    "name": "Zitronen-Limonade",
    "price": 4.00,
    "description": "Erfrischende Zitronen-Limonade mit natürlichen Zutaten",
    "image": "./assets/img/zitronen-limonade.jpg"
  },
    {
    "name": "Bier",
    "price": 6.00,
    "description": "Erfrischendes Lagerbier",
    "image": "./assets/img/bier.jpg"
    }
]

let cart = [];
let deliveryCost = 8;


function init() {
  renderMainDishes(),
  renderSideDishes(),
  renderDrinks();
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

function getMainDishesTemplate(maindish, index) {
  return `
<button class="dish-card" onclick="addToCart('main', ${index})">
<img src="${maindish.image}" alt="${maindish.name}">
<h3>${maindish.name}</h3>
<p>CHF ${maindish.price.toFixed(2)}</p>
</button>
`;
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

function renderDrinks() {

  let drinksContainer = document.getElementById('render-drinks');
  drinksContainer.innerHTML = "";

  for (let index = 0; index < drinksArray.length; index++) {
    const drinks = drinksArray[index];

    drinksContainer.innerHTML += getDrinksTemplate(drinks, index);
  }
}

function getDrinksTemplate(drinks, index) {
  return `
<button class="dish-card" onclick="addToCart('drinks', ${index})">
<img src="${drinks.image}" alt="${drinks.name}">
<h3>${drinks.name}</h3>
<p>CHF ${drinks.price.toFixed(2)}</p>
</button>
`;
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