import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import CompanyRoute from "./routes/CompanyRoute.js";
import connectCloudinary from "./config/Cloudinary.js";


const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

await connectDB();
await connectCloudinary()

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, api!");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


app.use("/api/company", CompanyRoute);



//app.post("/webhook", clerkWebhooks)

Sentry.setupExpressErrorHandler(app);


// Function to connect to the database with retries

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
