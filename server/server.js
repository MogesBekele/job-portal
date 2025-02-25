import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controller/Webhook.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

await connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, api!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhook", clerkWebhooks)
Sentry.setupExpressErrorHandler(app);

// Function to connect to the database with retries

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
