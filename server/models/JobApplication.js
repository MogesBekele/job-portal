import mongoose from "mongoose";


const JobApplicationSchema = new mongoose.Schema({

  userId: {type: String, required: true},
})