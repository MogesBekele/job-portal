import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';

const app = express();
//connect to database 
await connectDB()
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, api!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});