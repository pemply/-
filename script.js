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

// Глобальні змінні
let cart = [];
let selectedCategory = 'Всі';
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * Ініціалізація магазину
 */
function init() {
  displayProducts();
  loadCartFromLocalStorage();
  setupEventListeners();
  detectDeviceType();
  setupTouchOptimizations();
  
  // Додаткові ініціалізації для мобільних пристроїв
  if (isMobile) {
    setupMobileSpecificFeatures();
  }
}

/**
 * Налаштування особливостей для мобільних пристроїв
 */
function setupMobileSpecificFeatures() {
  // Додаємо клас для body для мобільних стилів
  document.body.classList.add('mobile-device');
  
  // Оптимізація для iOS
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    document.body.style.cursor = 'pointer';
    setupIOSSpecifics();
  }
  
  // Оптимізація для Android
  if (/Android/.test(navigator.userAgent)) {
    setupAndroidSpecifics();
  }
  
  // Ініціалізація свайп-жестів
  initSwipeGestures();
}

/**
 * Налаштування слухачів подій
 */
function setupEventListeners() {
  // Overlay для закриття модальних вікон
  document.getElementById('overlay').addEventListener('click', closeAllModals);
  document.getElementById('overlay').addEventListener('touchstart', handleTouchEvent);
  
  // Оптимізація вводу телефону
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', formatPhoneInput);
    phoneInput.addEventListener('focus', showVirtualKeyboardOptimized);
  }
  
  // Оптимізація для touch-пристроїв
  document.addEventListener('touchstart', handleTouchEvent, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  
  // Ресайз вікна
  window.addEventListener('resize', handleWindowResize);
}

/**
 * Відображення товарів з урахуванням адаптивності
 */
function displayProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  const filtered = selectedCategory === 'Всі' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-products"><i class="fas fa-box-open"></i><p>Товарів у цій категорії не знайдено</p></div>';
    return;
  }

  // Визначаємо кількість колонок в залежності від ширини екрану
  const columns = calculateColumnsCount();
  
  // Застосовуємо відповідну grid-структуру
  list.style.gridTemplateColumns = `repeat(${columns}, minmax(140px, 1fr))`;
  
  filtered.forEach(product => {
    const productElement = createProductElement(product);
    list.appendChild(productElement);
  });
}

/**
 * Створення елементу товару з адаптацією
 */
function createProductElement(product) {
  const div = document.createElement('div');
  div.className = 'product';
  
  // Додаємо бейдж для акційних товарів
  const discountBadge = product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : '';
  
  div.innerHTML = `
    ${discountBadge}
    <div class="product-image-container">
      <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-image">
    </div>
    <h3 class="product-title">${product.name}</h3>
    <div class="product-price-container">
      ${product.oldPrice ? `<span class="old-price">${product.oldPrice} грн</span>` : ''}
      <span class="current-price">${product.price} грн</span>
    </div>
    <div class="product-rating">
      ${generateRatingStars(product.rating)}
    </div>
    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
      <i class="fas fa-cart-plus"></i> Додати
    </button>
    <div class="product-tooltip">${product.description}</div>
  `;
  
  // Додаємо обробники подій для touch
  if (isMobile) {
    div.addEventListener('touchstart', handleProductTouchStart);
    div.addEventListener('touchend', handleProductTouchEnd);
  }
  
  return div;
}

/**
 * Логіка для кошика (розширена версія)
 */
function updateCart() {
  // Оновлюємо лічильник
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.getElementById('cart-count').textContent = itemCount;
  
  // Оновлюємо список товарів у кошику
  const list = document.getElementById('cart-items');
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  document.getElementById('total-price').textContent = total.toFixed(2);
  
  // Генеруємо HTML для кошика
  list.innerHTML = cart.length === 0 
    ? '<li class="empty-cart-message"><i class="fas fa-shopping-cart"></i><p>Кошик порожній</p></li>'
    : cart.map((item, index) => `
        <li class="cart-item">
          <div class="cart-item-info">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div>
              <span class="cart-item-name">${item.name}</span>
              <span class="cart-item-price">${item.price} грн × ${item.quantity || 1}</span>
            </div>
          </div>
          <div class="cart-item-controls">
            <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">−</button>
            <span class="quantity-value">${item.quantity || 1}</span>
            <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${index})">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </li>
      `).join('');
  
  // Оновлюємо кнопки кошика
  updateCartButtons();
  
  // Зберігаємо зміни
  saveCartToLocalStorage();
  
  // Оновлюємо міні-кошик (якщо є)
  updateMiniCart();
}

/**
 * Відправка замовлення (розширена версія)
 */
async function submitOrder(event) {
  event.preventDefault();
  
  // Валідація форми
  if (!validateOrderForm()) {
    return;
  }
  
  // Підготовка даних
  const orderData = prepareOrderData();
  
  try {
    // Відправка на сервер
    const response = await sendOrderToServer(orderData);
    
    if (response.success) {
      showSuccessMessage(orderData);
      clearCartAfterOrder();
      closeAllModals();
    } else {
      handleOrderError(response.error);
    }
  } catch (error) {
    console.error('Помилка при відправці замовлення:', error);
    showNotification('Сталася помилка при відправці замовлення. Спробуйте ще раз.', 'error');
  }
}

/**
 * Додаткові функції для мобільних пристроїв
 */
function setupTouchOptimizations() {
  // Збільшення клікабельних областей
  document.querySelectorAll('button, a').forEach(el => {
    el.style.minWidth = '44px';
    el.style.minHeight = '44px';
  });
  
  // Оптимізація інпутів
  document.querySelectorAll('input, textarea').forEach(input => {
    input.style.fontSize = '16px'; // Запобігає масштабуванню в iOS
  });
  
  // Додаткові стилі для touch
  document.body.style.webkitTapHighlightColor = 'transparent';
}

/**
 * Визначення типу пристрою
 */
function detectDeviceType() {
  const userAgent = navigator.userAgent;
  
  if (/Mobile|Android|iP(hone|od)|IEMobile/.test(userAgent)) {
    isMobile = true;
    document.documentElement.classList.add('touch-device');
  } else {
    isMobile = false;
    document.documentElement.classList.add('desktop-device');
  }
}

// Інші функції...

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', init);