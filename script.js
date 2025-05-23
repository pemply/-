const products = [
  { 
    id: 1, 
    name: 'Протеїн Optimum Nutrition Whey', 
    price: 950, 
    category: 'Протеїн', 
    image: 'https://waysport.ua/uploads/2021/09/8566258d00217a96ff9834ee13b6289b.jpg',
    description: 'Високоякісний сироватковий протеїн для швидкого відновлення м\'язів. Містить 24 г білка на порцію.'
  },
  { 
    id: 2, 
    name: 'Протеїн MyProtein Impact', 
    price: 870, 
    category: 'Протеїн', 
    image: 'https://powerway.com.ua/upload/iblock/2c3/hjqrdf2n583jhb1qvxn6nkfoyjd85i9d.jpg',
    description: 'Чистий сироватковий протеїн з високим вмістом білка (80% на порцію). Ідеальний для набору м\'язової маси.'
  },
  { 
    id: 3, 
    name: 'Креатин Monohydrate OstroVit', 
    price: 460, 
    category: 'Креатин', 
    image: 'https://waysport.ua/uploads/2023/07/44219d7bf23aedd279a3b5be6a72ac01.jpg',
    description: 'Чистий креатин моногідрат для збільшення сили та витривалості. 100% без добавок.'
  },
  { 
    id: 4, 
    name: 'Креатин Creatine Xplode', 
    price: 540, 
    category: 'Креатин', 
    image: 'https://nutrix.ua/image/cache/catalog/tovars/10000000101-1300x1300.jpg',
    description: 'Покращена формула креатину з транспортною системою для кращого засвоєння.'
  },
  { 
    id: 5, 
    name: 'BCAA 2:1:1 Powder', 
    price: 510, 
    category: 'Амінокислоти', 
    image: 'https://bcaa.ua/uploaded/catalog_spool/28982/p28982_Nutrend_BCAA_2_1_1_Powder_400_g_4.jpg',
    description: 'Оптимальне співвідношення амінокислот 2:1:1 для швидкого відновлення після тренувань.'
  },
  { 
    id: 6, 
    name: 'BCAA Scitec Nutrition', 
    price: 620, 
    category: 'Амінокислоти', 
    image: 'https://scitec-nutrition.com.ua/assets/images/bcaa-6400-375-foto.bmp',
    description: 'Преміальні амінокислоти з додаванням вітаміну B6 для кращого засвоєння.'
  },
  { 
    id: 7, 
    name: 'Pre-Workout Booster C4', 
    price: 630, 
    category: 'Бустери', 
    image: 'https://m.media-amazon.com/images/I/81b3rwaC89L.jpg',
    description: 'Енергетичний комплекс для підвищення продуктивності під час тренувань.'
  },
  { 
    id: 8, 
    name: 'Бустер NO-Xplode', 
    price: 690, 
    category: 'Бустери', 
    image: 'https://www.ifit.ee/media/ifit/.product-image/medium/product/Bsn/eu_no-xplode_30_watermelon.jpg',
    description: 'Потужний передтренувальний комплекс для максимальної енергії.'
  },
  { 
    id: 9, 
    name: 'L-Carnitine BioTech USA', 
    price: 420, 
    category: 'Жироспалювачі', 
    image: 'https://powerway.com.ua/upload/iblock/5ba/nqu0du0rwg0dsk549564uc1dmjs6ts22.jpeg',
    description: 'Сприяє активному спалюванню жиру під час фізичних навантажень.'
  },
  { 
    id: 10, 
    name: 'Fat Burner Black Mamba', 
    price: 760, 
    category: 'Жироспалювачі', 
    image: 'https://rukminim3.flixcart.com/image/850/1000/kkvhea80/vitamin-supplement/e/j/c/90-black-mamba-fat-burner-innovative-lab-original-imagy4gzcyepdg4w.jpeg',
    description: 'Інтенсивний жироспалювач для прискорення метаболізму.'
  },
  { 
    id: 11, 
    name: 'Mass Gainer Serious Mass', 
    price: 800, 
    category: 'Гейнери', 
    image: 'https://bodymarket.ua/img/p/4/2/9/6/4296-thickbox_default.jpg',
    description: 'Висококалорійний гейнер для швидкого набору м\'язової маси.'
  },
  { 
    id: 12, 
    name: 'Гейнер Mutant Mass', 
    price: 890, 
    category: 'Гейнери', 
    image: 'https://gymbeam.ua/media/catalog/product/cache/70f742f66feec18cb83790f14444a3d1/m/u/mutant_mass_2270.jpg',
    description: 'Потужний комплекс для набору ваги з оптимальним балансом білків та вуглеводів.'
  },
  { 
    id: 13, 
    name: 'Гантелі 10 кг', 
    price: 900, 
    category: 'Інвентар', 
    image: 'https://sport-motor.com.ua/image/cache/900-700/data/AAAAA/Dumbbells/10kg-Everlast.jpg',
    description: 'Набір гантелей з неіржавкої сталі, покриття з гумовим компонентом.'
  },
  { 
    id: 14, 
    name: 'Фітнес резинки', 
    price: 300, 
    category: 'Інвентар', 
    image: 'https://cdn.27.ua/sc--media--prod/default/86/18/b5/8618b55e-d6d3-4ef0-9b44-8cf3d99200ee.jpg',
    description: 'Набір 5 резинок з різним рівнем навантаження для тренувань вдома.'
  },
  { 
    id: 15, 
    name: 'Шейкер для коктейлів', 
    price: 150, 
    category: 'Інвентар', 
    image: 'https://weider.com.ua/datacache/3/d/c/f/1/3dcf1bf128983182739323403187a52f22704178.png',
    description: 'Зручний шейкер з мірною шкалою та відділенням для порошку.'
  },
  { 
    id: 16, 
    name: 'Коврик для йоги', 
    price: 450, 
    category: 'Інвентар', 
    image: 'https://content1.rozetka.com.ua/goods/images/big/258887915.jpg',
    description: 'Антиковзкий коврик для йоги та фітнесу, товщина 6 мм.'
  },
  { 
    id: 17, 
    name: 'Комплект "Сила та маса"', 
    price: 1490, 
    category: 'Акційні комплекти', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiVV4CumOXDwJWGFRNFj-y-82efrqDg7tUg&s',
    description: 'Набір з протеїну, креатину та гейнера для швидкого набору м\'язової маси.'
  },
  { 
    id: 18, 
    name: 'Комплект "Рельєф та витривалість"', 
    price: 1290, 
    category: 'Акційні комплекти', 
    image: 'https://ukratlet.com/wp-content/uploads/2025/01/Small-PredTren-PDMango-1.png',
    description: 'Комплекс для зниження жирової прослойки та підвищення витривалості.'
  }
];

let cart = [];
let selectedCategory = 'Всі';
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

function init() {
  // Спочатку приховуємо кошик перед будь-якою ініціалізацією
  const cartModal = document.getElementById('cart-modal');
  const overlay = document.getElementById('overlay');
  
  cartModal.classList.add('hidden');
  cartModal.classList.remove('active');
  overlay.classList.add('hidden');
  
  // Видаляємо будь-які дані про відкритий кошик
  localStorage.removeItem('cartOpen');
  
  // Ініціалізуємо інші компоненти
  displayProducts();
  loadCartFromLocalStorage();
  setupEventListeners();
  
  if (isMobile) {
    document.body.classList.add('mobile-device');
    // Додатковий фікс для iOS
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
  }
}

function setupEventListeners() {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', closeAllModals);
    overlay.addEventListener('touchstart', function(e) {
      e.preventDefault();
      closeAllModals();
    }, { passive: false });
  }
  
  // Покращений обробник для кнопки "Продовжити покупки"
  document.addEventListener('click', function(e) {
    const continueBtn = e.target.closest('.cart-buttons button:nth-child(3)');
    if (continueBtn) {
      e.preventDefault();
      e.stopImmediatePropagation();
      toggleCart(true); // Примусове закриття
      return false;
    }
  });

  // Додатковий touch-обробник для мобільних пристроїв
  document.addEventListener('touchend', function(e) {
    const continueBtn = e.target.closest('.cart-buttons button:nth-child(3)');
    if (continueBtn) {
      e.preventDefault();
      e.stopImmediatePropagation();
      toggleCart(true); // Примусове закриття
      return false;
    }
  }, { passive: false });
}

function formatPhoneInput() {
  let value = this.value.replace(/[^\d+]/g, '');
  if (!value.startsWith('+380')) {
    value = '+380';
  }
  if (value.length > 13) {
    value = value.slice(0, 13);
  }
  this.value = value;
}

function closeAllModals() {
  const cartModal = document.getElementById('cart-modal');
  const checkoutModal = document.getElementById('checkout-modal');
  const overlay = document.getElementById('overlay');
  
  cartModal.classList.remove('active');
  if (checkoutModal) checkoutModal.classList.add('hidden');
  overlay.classList.add('hidden');
  
  setTimeout(() => {
    cartModal.classList.add('hidden');
  }, 300);
  
  // iOS фікс
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
  }
}

function toggleCart(forceClose = false) {
  const cartModal = document.getElementById('cart-modal');
  const overlay = document.getElementById('overlay');
  
  // Примусове закриття (особливо для мобільних)
  if (forceClose) {
    cartModal.classList.remove('active');
    overlay.classList.add('hidden');
    setTimeout(() => {
      cartModal.classList.add('hidden');
    }, 300);
    return;
  }
  
  // Звичайна логіка переключення
  if (cartModal.classList.contains('hidden')) {
    cartModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    setTimeout(() => {
      cartModal.classList.add('active');
    }, 10);
  } else {
    cartModal.classList.remove('active');
    setTimeout(() => {
      cartModal.classList.add('hidden');
      overlay.classList.add('hidden');
    }, 300);
  }
  
  // iOS фікс
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.overflow = cartModal.classList.contains('hidden') ? 'auto' : 'hidden';
    document.body.style.position = cartModal.classList.contains('hidden') ? 'static' : 'fixed';
  }
}


function displayProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  const filtered = selectedCategory === 'Всі' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (filtered.length === 0) {
    list.innerHTML = '<p class="no-products">Товарів у цій категорії не знайдено</p>';
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.price} грн</p>
      <div class="product-tooltip">${product.description}</div>
      <button onclick="addToCart(${product.id})">Додати</button>
    `;
    list.appendChild(div);
  });
}

function filterByCategory(category) {
  selectedCategory = category;
  displayProducts();
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === category);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({...product, quantity: 1});
    }
    updateCart();
    saveCartToLocalStorage();
    showNotification(`${product.name} додано до кошика!`);
  }
}

function updateCart() {
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.getElementById('cart-count').textContent = itemCount;
  
  const list = document.getElementById('cart-items');
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  document.getElementById('total-price').textContent = total.toFixed(2);
  
  list.innerHTML = cart.length === 0 
    ? '<li class="empty-cart">Кошик порожній</li>'
    : cart.map((item, index) => `
        <li class="cart-item">
          <span class="item-name">${item.name}</span>
          <div class="item-controls">
            <span class="item-price">${item.price} грн × ${item.quantity || 1}</span>
            <div class="quantity-controls">
              <button onclick="changeQuantity(${index}, -1)">-</button>
              <span>${item.quantity || 1}</span>
              <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
          </div>
        </li>
      `).join('');
  
  // Оновлюємо стан кнопки оформлення замовлення
  const checkoutBtn = document.querySelector('.cart-buttons button:nth-child(2)');
  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
  }
}

async function submitOrder(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('address').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  if (!name || !address || !phone) {
    showNotification('Будь ласка, заповніть всі поля', 'error');
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const orderItems = cart.map(item => 
    `${item.name} (${item.quantity} шт.) — ${item.price * item.quantity} грн`
  ).join('\n');

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Ім'я": name,
        "Адреса": address,
        "Телефон": phone,
        "Замовлення": orderItems,
        "Сума": `${total} грн`,
        "_subject": 'Нове замовлення з FitPower!',
        "_template": 'table',
        "_captcha": 'false'
      })
    });

    if (response.ok) {
      showNotification('Замовлення успішно відправлено! Дякуємо!');
      cart = [];
      updateCart();
      saveCartToLocalStorage();
      closeAllModals();
      form.reset();
    } else {
      throw new Error('Помилка відправки');
    }
  } catch (error) {
    console.error('Помилка:', error);
    showNotification('Помилка при відправці замовлення. Спробуйте ще раз.', 'error');
  }
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  const overlay = document.getElementById('overlay');
  
  if (cartModal.classList.contains('hidden')) {
    // Відкриваємо кошик
    cartModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    setTimeout(() => {
      cartModal.classList.add('active');
    }, 10);
  } else {
    // Закриваємо кошик
    cartModal.classList.remove('active');
    setTimeout(() => {
      cartModal.classList.add('hidden');
      overlay.classList.add('hidden');
    }, 300);
  }
  function setupEventListeners() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
      overlay.addEventListener('click', closeAllModals);
      overlay.addEventListener('touchstart', function(e) {
        e.preventDefault();
        closeAllModals();
      }, { passive: false });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', formatPhoneInput);
    }
    
    // Додаємо обробник для кнопки "Продовжити покупки"
    const continueBtn = document.querySelector('.cart-buttons button:nth-child(3)');
    if (continueBtn) {
      continueBtn.addEventListener('click', toggleCart);
      continueBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        toggleCart();
      }, { passive: false });
    }
    
    // Додаємо обробник для інших кнопок кошика
    document.addEventListener('click', function(e) {
      if (e.target.closest('.cart-buttons button:nth-child(1)')) {
        e.preventDefault();
        clearCart();
      } else if (e.target.closest('.cart-buttons button:nth-child(2)')) {
        e.preventDefault();
        checkout();
      }
    });
  }
  // Для iOS фіксуємо body при відкритому модальному вікні
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    if (!cartModal.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
  }
}

function checkout() {
  document.getElementById('cart-modal').classList.remove('active');
  setTimeout(() => {
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('checkout-modal').classList.remove('hidden');
  }, 300);
}

function cancelCheckout() {
  closeAllModals();
}

function changeQuantity(index, delta) {
  const item = cart[index];
  item.quantity = (item.quantity || 1) + delta;
  
  if (item.quantity < 1) {
    cart.splice(index, 1);
  }
  
  updateCart();
  saveCartToLocalStorage();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  saveCartToLocalStorage();
}

function clearCart() {
  cart = [];
  updateCart();
  saveCartToLocalStorage();
  showNotification('Кошик очищено');
}

function saveCartToLocalStorage() {
  localStorage.setItem('fitpower_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('fitpower_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCart();
    } catch (e) {
      console.error('Помилка завантаження кошика', e);
      localStorage.removeItem('fitpower_cart');
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Додатковий фікс - чекаємо на повне завантаження DOM
  setTimeout(init, 50);
});