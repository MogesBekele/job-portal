import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, api!');
});

// Function to connect to the database with retries
const connectWithRetry = async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Failed to connect to the database. Retrying in 5 seconds...', err);
    setTimeout(connectWithRetry, 5000);
  }
};

// Connect to the database
connectWithRetry();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});