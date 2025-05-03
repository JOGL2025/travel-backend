<!-- دمج واجهة البوت مع واجهة البحث -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Journey Glows | Booking Assistant</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      background: #f5f5f5;
      color: #333;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      gap: 20px;
    }
    .form-area, .chat-area {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      flex: 1 1 500px;
    }
    .chat-area {
      max-height: 600px;
      display: flex;
      flex-direction: column;
    }
    .chat-messages {
      flex: 1;
      background: #f1f1f1;
      border-radius: 10px;
      padding: 10px;
      overflow-y: auto;
      margin-bottom: 10px;
    }
    .message { margin-bottom: 10px; }
    .user { text-align: right; }
    .bot { text-align: left; }
    .voice-controls {
      display: flex;
      gap: 10px;
    }
    input[type="text"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
      width: 100%;
      margin-bottom: 10px;
    }
    button {
      padding: 10px 15px;
      border: none;
      background: #000;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #32B9A5;
    }
  </style>
</head>
<body>
  <header style="text-align:center; padding:20px; background:#ffd800; font-weight:bold; font-size:24px;">Journey Glows - Smart Booking</header>

  <div class="container">
    <div class="form-area">
<!-- (1) بداية ملف HTML -->
<!DOCTYPE html> 
<html lang="en"> 
<head> 
  <!-- (2) إعدادات الصفحة -->
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>Journey Glows | Book Flights & Hotels</title> 

  <!-- (3) تحميل خط Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

  <!-- (4) بداية تنسيقات CSS -->
  <style>
    /* (5) تنسيقات أساسية للصفحة */
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background: #fff;
      color: #000;
      animation: fadeIn 1s ease;
    }
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }

    /* (6) حاوية اللغة والعملة */
    .language-currency-container {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      gap: 10px;
    }
    .language-currency-container select {
      padding: 8px 15px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 14px;
      background: #f9f9f9;
      cursor: pointer;
    }

    /* (7) تبويبات الطيران والفنادق */
    .tab-container {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    .tab {
      padding: 12px 25px;
      border: none;
      background: #f2f2f2;
      color: #000;
      font-weight: 600;
      cursor: pointer;
      border-radius: 6px;
      transition: background 0.3s;
    }
    .tab.active {
      background: #ffc800;
      color: #000;
    }

    /* (8) منطقة النماذج (Forms) */
    .form-area {
      max-width: 1100px;
      margin: 0 auto;
      background: #f9f9f9;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    }
    .form-group {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-bottom: 20px;
    }
    .form-group > div {
      flex: 1 1 200px;
      display: flex;
      flex-direction: column;
    }
    input, select, .passenger-selector {
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
      width: 100%;
    }
    button.search-btn {
      background: #000;
      color: #fff;
      padding: 14px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;
      font-size: 16px;
      margin-top: 10px;
    }
    button.search-btn:hover {
      background: #32B9A5;
      transform: scale(1.05);
    }

    /* (9) Dropdown للركاب */
    .passenger-dropdown {
      display: none;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-top: 5px;
      padding: 10px;
    }
    .passenger-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
    }
    .counter {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .counter button {
      background: #eee;
      border: none;
      border-radius: 50%;
      width: 28px;
      height: 28px;
      font-size: 18px;
      cursor: pointer;
    }
    .counter button:hover {
      background: #ddd;
    }

    /* (10) نتائج البحث */
    #results {
      margin: 40px auto;
      max-width: 1100px;
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .result-card {
      background: #ffffff;
      border: 1px solid #eee;
      border-radius: 12px;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.05);
      width: 300px;
      padding: 20px;
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: fadeInUp 0.6s ease both;
    }
    .result-card:hover {
      transform: translateY(-5px);
      box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
    }
    .result-card p {
      margin: 10px 0;
      font-size: 15px;
      color: #333;
      text-align: center;
    }
    .result-card a {
      margin-top: 15px;
      background: #ffc800;
      color: #000;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }
    .result-card a:hover {
      background: #ffb700;
    }
    @keyframes fadeInUp {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }

    /* (11) فلاتر البحث */

    .filters {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .filters select {
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 14px;
    }
/* (C) أنماط الـ Results Prototype */
.section-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 30px 0 10px;
}
.results-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.result-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  width: 280px;
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 0.6s ease both;
}
.result-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}
@keyframes fadeInUp {
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
}
/* (12a) أنماط معرض الصور داخل البطاقة */
.image-slider {
  position: relative;
  width: 100%; height: 160px;
  overflow: hidden;
  margin-bottom: 10px;
}
.image-slider img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.image-slider .slide-prev,
.image-slider .slide-next {
  position: absolute; top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.4);
  color: #fff; border: none;
  padding: 6px; cursor: pointer;
}
.image-slider .slide-prev { left: 8px; }
.image-slider .slide-next { right: 8px; }

  </style> 
  <!-- (12) نهاية CSS -->

</head>
<body> <!-- (13) بداية جسم الصفحة -->

  <!-- (14) اختيار اللغة والعملة -->
  <div class="language-currency-container">
    <select id="language-select" onchange="changeLanguage()"> <!-- (15) قائمة اختيار اللغة -->
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="es">Español</option>
      <option value="ru">Русский</option>
      <option value="zh">中文</option>
    </select>

    <select id="currency-select" onchange="changeCurrency()"> <!-- (16) قائمة اختيار العملة -->
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="GBP">GBP (£)</option>
      <option value="JPY">JPY (¥)</option>
      <option value="CNY">CNY (¥)</option>
      <option value="RUB">RUB (₽)</option>
    </select>
  </div>

  <!-- (17) التابز (Flights - Hotels) -->
  <div class="tab-container">
    <button class="tab active" id="tab-flights" onclick="showTab('flights')">Flights</button>
    <button class="tab" id="tab-hotels" onclick="showTab('hotels')">Hotels</button>
  </div>

  <!-- (18) منطقة النموذجين -->
  <div class="form-area">
    
    <!-- (19) نموذج الطيران -->
    <div id="flights" class="tab-content">
      <div class="form-group">
        <div>
          <select id="trip-type">
            <option value="oneway">One Way</option>
            <option value="roundtrip">Round Trip</option>
          </select>
        </div>
        <div><input type="text" id="flight-origin" placeholder="Origin (IATA)" oninput="autocompleteAirport(this)"></div>
        <div><input type="text" id="flight-destination" placeholder="Destination (IATA)" oninput="autocompleteAirport(this)"></div>
        <div><input type="date" id="flight-departure"></div>
        <div><input type="date" id="flight-return"></div>
      </div>

      <div class="form-group">
        <div class="passenger-selector" onclick="togglePassengers()">Passengers & Class</div>
        <div>
          <select id="flight-class">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>
      </div>

      <!-- (20) قائمة الركاب -->
      <div id="passenger-dropdown" class="passenger-dropdown">
        <div class="passenger-item">
          <span id="adults-label">Adults</span>
          <div class="counter">
            <button onclick="decrease('adults')">-</button>
            <span id="adults-count">1</span>
            <button onclick="increase('adults')">+</button>
          </div>
        </div>
        <div class="passenger-item">
          <span id="children-label">Children under 12 years</span>
          <div class="counter">
            <button onclick="decrease('children')">-</button>
            <span id="children-count">0</span>
            <button onclick="increase('children')">+</button>
          </div>
        </div>
        <div class="passenger-item">
          <span id="infants-label">Infants under 2 years</span>
          <div class="counter">
            <button onclick="decrease('infants')">-</button>
            <span id="infants-count">0</span>
            <button onclick="increase('infants')">+</button>
          </div>
        </div>
      </div>

      <!-- (21) زر بحث الرحلات -->
      <button class="search-btn" id="search-flight-btn" onclick="searchFlight()">Search Flight</button>

    </div> <!-- (22) نهاية نموذج الطيران -->

    <!-- (23) نموذج الفنادق -->
    <div id="hotels" class="tab-content" style="display:none;">
      <div class="form-group">
        <div><input type="text" id="hotel-location" placeholder="City or Hotel Name" oninput="autocompleteHotel(this)"></div>
        <div><input type="date" id="hotel-checkin"></div>
        <div><input type="date" id="hotel-checkout"></div>
        <div>
          <select id="guests">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
          </select>
        </div>
      </div>

      <!-- (24) زر بحث الفنادق -->
      <button class="search-btn" id="search-hotel-btn" onclick="searchHotel()">Search Hotel</button>
    </div> <!-- (25) نهاية نموذج الفنادق -->

  </div> <!-- (26) نهاية منطقة النماذج -->

  <!-- (27) فلاتر الترتيب -->
  <div class="filters" style="display:none;" id="filters-section">
    <select id="sort-select" onchange="applyFilters()">
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
    </select>
  </div>

  <!-- (28) عرض نتائج البحث -->
  <div id="results"></div>
<!-- (A) قسم نتائج الطيران -->
<h2 class="section-title">Flight Search Results</h2>
<div class="results-container" id="flight-results"></div>

<!-- (B) قسم نتائج الفنادق -->
<h2 class="section-title">Hotel Search Results</h2>
<div class="results-container" id="hotel-results"></div>

<script> <!-- (29) جافاسكريبت: التحكم بالتبديل بين Tabs -->
function showTab(tab) {
  document.getElementById('flights').style.display = (tab === 'flights') ? 'block' : 'none'; // (30)
  document.getElementById('hotels').style.display = (tab === 'hotels') ? 'block' : 'none'; // (31)
  document.getElementById('filters-section').style.display = 'none'; // (32)
  // (32a) إخفاء/إظهار أقسام النتائج حسب التبويب
  document.getElementById('flight-results').style.display = (tab === 'flights') ? 'flex' : 'none';
  document.getElementById('hotel-results').style.display  = (tab === 'hotels')  ? 'flex' : 'none';

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); // (33)
  event.target.classList.add('active'); // (34)
}
</script>

<script> <!-- (35) جافاسكريبت: التحكم بالركاب (زيادة/نقصان) -->
let passengers = { adults: 1, children: 0, infants: 0 }; // (36)

function togglePassengers() { // (37)
  const dropdown = document.getElementById('passenger-dropdown'); // (38)
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'; // (39)
}

function updateCounts() { // (40)
  document.getElementById('adults-count').innerText = passengers.adults; // (41)
  document.getElementById('children-count').innerText = passengers.children; // (42)
  document.getElementById('infants-count').innerText = passengers.infants; // (43)
}

function increase(type) { // (44)
  if ((passengers.adults + passengers.children + passengers.infants) < 9) { // (45)
    passengers[type]++; // (46)
    updateCounts(); // (47)
  }
}

function decrease(type) { // (48)
  if (passengers[type] > (type === 'adults' ? 1 : 0)) { // (49)
    passengers[type]--; // (50)
    updateCounts(); // (51)
  }
}
</script>

<script> <!-- (52) جافاسكريبت: الترجمة حسب اللغة المختارة -->
const translations = { // (53)
  en: { flights: "Flights", hotels: "Hotels", oneway: "One Way", roundtrip: "Round Trip", origin: "Origin (IATA)", destination: "Destination (IATA)", departure: "Departure Date", return: "Return Date", passengersClass: "Passengers & Class", economy: "Economy", business: "Business", first: "First Class", adults: "Adults", children: "Children under 12 years", infants: "Infants under 2 years", searchFlight: "Search Flight", searchHotel: "Search Hotel", hotelLocation: "City or Hotel Name", hotelCheckin: "Check-in Date", hotelCheckout: "Check-out Date" },
  ar: { flights: "رحلات الطيران", hotels: "الفنادق", oneway: "ذهاب فقط", roundtrip: "ذهاب وعودة", origin: "مكان الإقلاع (رمز IATA)", destination: "الوجهة (رمز IATA)", departure: "تاريخ المغادرة", return: "تاريخ العودة", passengersClass: "عدد الركاب والدرجة", economy: "اقتصادي", business: "رجال أعمال", first: "الدرجة الأولى", adults: "البالغين", children: "الأطفال أقل من 12 سنة", infants: "الرضع أقل من سنتين", searchFlight: "ابحث عن رحلة", searchHotel: "ابحث عن فندق", hotelLocation: "اسم المدينة أو الفندق", hotelCheckin: "تاريخ الوصول", hotelCheckout: "تاريخ المغادرة" },
  fr: { flights: "Vols", hotels: "Hôtels", oneway: "Aller simple", roundtrip: "Aller-retour", origin: "Origine (IATA)", destination: "Destination (IATA)", departure: "Date de départ", return: "Date de retour", passengersClass: "Passagers & Classe", economy: "Économie", business: "Affaires", first: "Première classe", adults: "Adultes", children: "Enfants de moins de 12 ans", infants: "Bébés de moins de 2 ans", searchFlight: "Rechercher un vol", searchHotel: "Rechercher un hôtel", hotelLocation: "Ville ou nom de l'hôtel", hotelCheckin: "Date d'arrivée", hotelCheckout: "Date de départ" },
  de: { flights: "Flüge", hotels: "Hotels", oneway: "Nur Hinflug", roundtrip: "Hin- und Rückflug", origin: "Abflug (IATA)", destination: "Ziel (IATA)", departure: "Abflugdatum", return: "Rückflugdatum", passengersClass: "Passagiere & Klasse", economy: "Economy", business: "Business", first: "First Class", adults: "Erwachsene", children: "Kinder unter 12 Jahren", infants: "Kleinkinder unter 2 Jahren", searchFlight: "Flug suchen", searchHotel: "Hotel suchen", hotelLocation: "Stadt oder Hotelname", hotelCheckin: "Check-in Datum", hotelCheckout: "Check-out Datum" },
  es: { flights: "Vuelos", hotels: "Hoteles", oneway: "Solo ida", roundtrip: "Ida y vuelta", origin: "Origen (IATA)", destination: "Destino (IATA)", departure: "Fecha de salida", return: "Fecha de regreso", passengersClass: "Pasajeros y clase", economy: "Económica", business: "Negocios", first: "Primera clase", adults: "Adultos", children: "Niños menores de 12", infants: "Bebés menores de 2", searchFlight: "Buscar vuelo", searchHotel: "Buscar hotel", hotelLocation: "Ciudad o nombre del hotel", hotelCheckin: "Fecha de check-in", hotelCheckout: "Fecha de check-out" },
  ru: { flights: "Рейсы", hotels: "Отели", oneway: "В одну сторону", roundtrip: "Туда и обратно", origin: "Отправление (IATA)", destination: "Назначение (IATA)", departure: "Дата вылета", return: "Дата возврата", passengersClass: "Пассажиры и класс", economy: "Эконом", business: "Бизнес", first: "Первый класс", adults: "Взрослые", children: "Дети до 12 лет", infants: "Младенцы до 2 лет", searchFlight: "Поиск рейса", searchHotel: "Поиск отеля", hotelLocation: "Город или название отеля", hotelCheckin: "Дата заезда", hotelCheckout: "Дата выезда" },
  zh: { flights: "航班", hotels: "酒店", oneway: "单程", roundtrip: "往返", origin: "出发地 (IATA)", destination: "目的地 (IATA)", departure: "出发日期", return: "返回日期", passengersClass: "乘客和舱位", economy: "经济舱", business: "商务舱", first: "头等舱", adults: "成人", children: "12岁以下儿童", infants: "2岁以下婴儿", searchFlight: "搜索航班", searchHotel: "搜索酒店", hotelLocation: "城市或酒店名称", hotelCheckin: "入住日期", hotelCheckout: "退房日期" }
};

function changeLanguage() { // (54)
  const lang = document.getElementById('language-select').value; // (55)
  const t = translations[lang] || translations['en']; // (56)

  document.getElementById('tab-flights').innerText = t.flights; // (57)
  document.getElementById('tab-hotels').innerText = t.hotels; // (58)
  document.getElementById('trip-type').options[0].text = t.oneway; // (59)
  document.getElementById('trip-type').options[1].text = t.roundtrip; // (60)
  document.getElementById('flight-origin').placeholder = t.origin; // (61)
  document.getElementById('flight-destination').placeholder = t.destination; // (62)
  document.getElementById('flight-departure').placeholder = t.departure; // (63)
  document.getElementById('flight-return').placeholder = t.return; // (64)
  document.querySelector('.passenger-selector').innerText = t.passengersClass; // (65)
  document.getElementById('flight-class').options[0].text = t.economy; // (66)
  document.getElementById('flight-class').options[1].text = t.business; // (67)
  document.getElementById('flight-class').options[2].text = t.first; // (68)
  document.getElementById('adults-label').innerText = t.adults; // (69)
  document.getElementById('children-label').innerText = t.children; // (70)
  document.getElementById('infants-label').innerText = t.infants; // (71)
  document.getElementById('search-flight-btn').innerText = t.searchFlight; // (72)
  document.getElementById('search-hotel-btn').innerText = t.searchHotel; // (73)
  document.getElementById('hotel-location').placeholder = t.hotelLocation; // (74)
  document.getElementById('hotel-checkin').placeholder = t.hotelCheckin; // (75)
  document.getElementById('hotel-checkout').placeholder = t.hotelCheckout; // (76)
}
</script>
<script> <!-- (77) إعداد العملة والـ API توكن -->
const currencyRates = { USD: 1, EUR: 0.93, GBP: 0.8, JPY: 154.5, CNY: 7.23, RUB: 93.2 }; // (78)
let selectedCurrency = "USD"; // (79)
const apiToken = 'bfed3f8121f7e14df066692823553f4d'; // (80)
const defaultHotelImg = 'https://via.placeholder.com/300x200?text=No+Image'; // (80a)
function changeCurrency() { // (81)
  selectedCurrency = document.getElementById('currency-select').value; // (82)
}
</script>

<script> <!-- (83) البحث عن الفنادق -->
async function searchHotel() { // (84)
  // (84a) مسح النتائج السابقة وإخفاء الفلاتر
  document.getElementById('flight-results').innerHTML      = '';
  document.getElementById('hotel-results').innerHTML       = '';
  document.getElementById('filters-section').style.display = 'none';

  const location = document.getElementById('hotel-location').value.trim(); // (85)
  const checkin = document.getElementById('hotel-checkin').value; // (86)
  const checkout = document.getElementById('hotel-checkout').value; // (87)
  const guests = document.getElementById('guests').value; // (88)

  if (!location || !checkin || !checkout) { // (89)
    document.getElementById('results').innerHTML = '<p>Please fill all hotel fields.</p>'; // (90)
    return; // (91)
  }

  let url = `https://engine.hotellook.com/api/v2/cache.json?location=${location}&checkIn=${checkin}&checkOut=${checkout}&adultsCount=${guests}&currency=${selectedCurrency}&token=${apiToken}`; // (92)

  try {
    const response = await fetch(url); // (93)
    const data = await response.json(); // (94)
    console.log('🔍 Raw Hotel Data:', data[0]); // (94a)

    if (!data || data.length === 0) { // (95)
      document.getElementById('results').innerHTML = '<p>No hotels found.</p>'; // (96)
      return; // (97)
    }

    window.hotelData = data; // (98)
    displayHotels(window.hotelData); // (99)
    setupHotelFilters(); // (100)

  } catch (error) {
    console.error(error); // (101)
    document.getElementById('results').innerHTML = '<p>Error fetching hotels. Please try again later.</p>'; // (102)
  }
}

function displayHotels(hotels) { // (103)
  let resultsHTML = ''; // (104)
  hotels.forEach(hotel => {
    const imageUrl = hotel.imageUrl || defaultHotelImg; // (جلب الصورة أو الصورة الافتراضية)
    resultsHTML += `
      <div class="result-card">
        <!-- (103a) معرض الصور -->
        <div class="image-slider" data-images='${JSON.stringify(hotel.images||[])}'>
          <button class="slide-prev">&lt;</button>
<img
  src="${hotel.images?.[0] || defaultHotelImg}"
  alt="${hotel.hotelName}"
>
          <button class="slide-next">&gt;</button>
        </div>
        <p><strong>Hotel:</strong> ${hotel.hotelName}</p>
        <p><strong>City:</strong> ${hotel.location?.city||'—'}</p>
        <p><strong>Price:</strong> ${Math.round(hotel.priceFrom)} ${selectedCurrency}</p>
        <a href="https://www.hotellook.com/?hotelId=${hotel.hotelId}" target="_blank" class="btn-book">Book Now</a>
      </div>
    `;
  });
  document.getElementById('hotel-results').innerHTML = resultsHTML; // (105)
  initImageSliders();                                         // (105a)
}

</script>

<script> <!-- (106) البحث عن الطيران -->
async function searchFlight() { // (107)
  // (107a) مسح النتائج السابقة وإخفاء الفلاتر
  document.getElementById('flight-results').innerHTML      = '';
  document.getElementById('hotel-results').innerHTML       = '';
  document.getElementById('filters-section').style.display = 'none';

  const origin = document.getElementById('flight-origin').value.trim(); // (108)
  const destination = document.getElementById('flight-destination').value.trim(); // (109)
  const departure = document.getElementById('flight-departure').value; // (110)
  const returnDate = document.getElementById('flight-return').value; // (111)
  const adults = passengers.adults; // (112)
  const children = passengers.children; // (113)
  const infants = passengers.infants; // (114)
  const flightClass = document.getElementById('flight-class').value; // (115)
  const tripType = document.getElementById('trip-type').value; // (116)

  if (!origin || !destination || !departure) { // (117)
    document.getElementById('flight-results').innerHTML = '<p>Please fill all flight fields.</p>';
 // (118)
    return; // (119)
  }

  let url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${departure}&return_at=${tripType === 'roundtrip' ? returnDate : ''}&trip_class=${flightClass}&adults=${adults}&children=${children}&infants=${infants}&currency=${selectedCurrency}&token=${apiToken}`; // (120)

  try {
    const response = await fetch(url); // (121)
    const data = await response.json(); // (122)

    if (!data.data || data.data.length === 0) { // (123)
      document.getElementById('results').innerHTML = '<p>No flights found.</p>'; // (124)
      return; // (125)
    }

    window.flightData = data.data; // (126)
    displayFlights(window.flightData); // (127)
    setupFlightFilters(); // (128)

  } catch (error) {
    console.error(error); // (129)
    document.getElementById('results').innerHTML = '<p>Error fetching flights. Please try again later.</p>'; // (130)
  }
}

function displayFlights(flights) { // (131)
  let resultsHTML = ''; // (132)
  flights.forEach(flight => {
       resultsHTML += `
      <div class="result-card">
        <!-- (131a) معرض صور الرحلة -->
        <div class="image-slider" data-images='${JSON.stringify(flight.images||[])}'>
          <button class="slide-prev">&lt;</button>
          <img src="${flight.images?.[0]||'plane-placeholder.jpg'}" alt="${flight.airline}">
          <button class="slide-next">&gt;</button>
        </div>
        <p><strong>Airline:</strong> ${flight.airline}</p>
        <p><strong>Departure:</strong> ${flight.departure_at.split('T')[0]}</p>
        <p><strong>Price:</strong> ${Math.round(flight.price)} ${selectedCurrency}</p>
        <a href="https://www.aviasales.com" target="_blank" class="btn-book">Book Now</a>
      </div>
    `;
  });
  document.getElementById('flight-results').innerHTML = resultsHTML;
 // (133)
}
</script>
<script> <!-- (134) سكربت فلاتر ترتيب النتائج -->
function setupFlightFilters() { // (135)
  const filtersSection = document.getElementById('filters-section'); // (136)
  filtersSection.style.display = 'block'; // (137)

  document.getElementById('sort-select').onchange = function() { // (138)
    if (this.value === 'price-low-high') { // (139)
      window.flightData.sort((a, b) => a.price - b.price); // (140)
    } else if (this.value === 'price-high-low') { // (141)
      window.flightData.sort((a, b) => b.price - a.price); // (142)
    }
    displayFlights(window.flightData); // (143)
  };
}

function setupHotelFilters() { // (144)
  const filtersSection = document.getElementById('filters-section'); // (145)
  filtersSection.style.display = 'block'; // (146)

  document.getElementById('sort-select').onchange = function() { // (147)
    if (this.value === 'price-low-high') { // (148)
      window.hotelData.sort((a, b) => a.priceFrom - b.priceFrom); // (149)
    } else if (this.value === 'price-high-low') { // (150)
      window.hotelData.sort((a, b) => b.priceFrom - a.priceFrom); // (151)
    }
     displayHotels(window.hotelData); // (152)
};  // نهاية event handler لفلاتر الفنادق
</script>

<!-- (152a) هنا بالضبط: أضف هذا السكربت -->
<script>
function initImageSliders() {
  document.querySelectorAll('.image-slider').forEach(slider => {
    const imgs = JSON.parse(slider.dataset.images);
    let idx = 0;
    const imgEl = slider.querySelector('img');
    slider.querySelector('.slide-next').onclick = () => {
      if (!imgs.length) return;
      idx = (idx + 1) % imgs.length;
      imgEl.src = imgs[idx];
    };
    slider.querySelector('.slide-prev').onclick = () => {
      if (!imgs.length) return;
      idx = (idx - 1 + imgs.length) % imgs.length;
      imgEl.src = imgs[idx];
    };
  });
}
</script>

</body>
</html>    </div>

    <div class="chat-area">
      <h2>Chat Assistant</h2>
      <div class="chat-messages" id="chat"></div>
      <input type="text" id="user-input" placeholder="Ask anything..." onkeydown="if(event.key==='Enter')sendMessage()">
      <div class="voice-controls">
        <button onclick="startListening()">🎤 Speak</button>
        <button onclick="stopListening()">🛑 Stop</button>
      </div>
    </div>
  </div>

  <script>
    const chat = document.getElementById('chat');
    async function sendMessage() {
      const input = document.getElementById('user-input');
      const message = input.value.trim();
      if (!message) return;
      chat.innerHTML += `<div class="message user">${message}</div>`;
      input.value = '';
      const res = await fetch("https://travel-backend-1-y1mp.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      const reply = data.reply;
      chat.innerHTML += `<div class="message bot">${reply}</div>`;
      chat.scrollTop = chat.scrollHeight;
    }

    let recognition;
    function startListening() {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.onresult = (e) => {
        document.getElementById('user-input').value = e.results[0][0].transcript;
        sendMessage();
      };
      recognition.start();
    }

    function stopListening() {
      if (recognition) recognition.stop();
    }
  </script>
</body>
</html>