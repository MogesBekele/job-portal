import mongoose from "mongoose";


const JobApplicationSchema = new mongoose.Schema({

  userId: {type: String, ref: 'User',  required: true},
  companyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true},
})