const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/flights', async (req, res) => {
  const { origin, destination, departure, returnDate } = req.body;
  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${departure}&return_at=${returnDate}&currency=USD&token=${process.env.TRAVELPAYOUTS_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.post('/api/hotels', async (req, res) => {
  const { city, checkin, checkout, guests } = req.body;
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${city}&checkIn=${checkin}&checkOut=${checkout}&adultsCount=${guests}&currency=USD&token=${process.env.TRAVELPAYOUTS_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
