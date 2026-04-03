require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.ANTHROPIC_API_KEY;

if (!API_KEY) {
  console.error('\n❌  ANTHROPIC_API_KEY not set in .env file.');
  console.error('    Copy .env.example to .env and paste your key.\n');
  process.exit(1);
}

app.use(cors());
app.use(express.json());

// Serve the frontend
app.use(express.static(path.join(__dirname, 'public')));

// Proxy endpoint — receives requests from the browser, adds the API key, forwards to Anthropic
app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err.message);
    res.status(500).json({ error: { type: 'proxy_error', message: err.message } });
  }
});

app.listen(PORT, () => {
  console.log('\n✅  AINI Field Agent running at:');
  console.log(`    http://localhost:${PORT}\n`);
  console.log('    Open that URL in your browser.');
  console.log('    Press Ctrl+C to stop.\n');
});
