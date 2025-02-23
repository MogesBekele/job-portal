import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

await connectDB();


// Basic route
app.get('/', (req, res) => {
  res.send('Hello, api!');
});

// Function to connect to the database with retries
