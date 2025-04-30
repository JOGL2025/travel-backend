const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const TRAVELPAYOUTS_TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Flights endpoint
app.post('/api/flights', async (req, res) => {
  const { origin, destination, departure, returnDate } = req.body;
  const url = `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${origin}&destination=${destination}&departure_at=${departure}&return_at=${returnDate}&currency=USD&token=${TRAVELPAYOUTS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({ results: data.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
});

// Hotels endpoint
app.post('/api/hotels', async (req, res) => {
  const { city, checkin, checkout, guests } = req.body;
  const url = `https://engine.hotellook.com/api/v2/cache.json?location=${city}&checkIn=${checkin}&checkOut=${checkout}&adultsCount=${guests}&currency=USD&token=${TRAVELPAYOUTS_TOKEN}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json({ results: data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hotel data' });
  }
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }]
      })
    });

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from OpenAI' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});