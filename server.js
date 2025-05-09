const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Data file path
const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dir = path.join(__dirname, 'data');
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir);
  }
}

// Read bookings data
async function readBookings() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, '[]');
      return [];
    }
    throw error;
  }
}

// Write bookings data
async function writeBookings(bookings) {
  await fs.writeFile(DATA_FILE, JSON.stringify(bookings, null, 2));
}

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Get all bookings
app.get('/bookings', async (req, res) => {
  try {
    const bookings = await readBookings();
    res.render('bookings', { bookings });
  } catch (error) {
    res.status(500).send('Error reading bookings');
  }
});

// Create new booking
app.post('/bookings', async (req, res) => {
  try {
    const bookings = await readBookings();
    const newBooking = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    bookings.push(newBooking);
    await writeBookings(bookings);
    res.redirect('/bookings');
  } catch (error) {
    res.status(500).send('Error creating booking');
  }
});

// Initialize server
async function init() {
  await ensureDataDir();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

init().catch(console.error);