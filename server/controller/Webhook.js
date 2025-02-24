import { Webhook } from "svix";
import User from "../models/User";

// API CONTROLLER fun to manage clerk user with database
export const clerkWebhooks = async(req, res) => {
  try{
 // CREATE A svix instance with clerk webhook secret
 const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

  }
  catch(error){
    console.log(error);
  }
}