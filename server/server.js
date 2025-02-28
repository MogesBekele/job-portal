import "./config/instrument.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import * as Sentry from "@sentry/node";
import CompanyRoute from "./routes/CompanyRoute.js";
import connectCloudinary from "./config/Cloudinary.js";
import JobsRoute from "./routes/JobsRoute.js";
import UserRoute from "./routes/UserRoute.js";
import {clerkMiddleware} from '@clerk/express'


const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

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
app.use("/api/jobs", JobsRoute);
app.use("/api/users", UserRoute);



//app.post("/webhook", clerkWebhooks)

Sentry.setupExpressErrorHandler(app);


// Function to connect to the database with retries

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
