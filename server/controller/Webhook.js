import { Webhook } from "svix";
import User from "../models/User";

// API CONTROLLER fun to manage clerk user with database
export const clerkWebhooks = async(req, res) => {
  try{
 // CREATE A svix instance with clerk webhook secret
 const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
  // VERIFY THE headers

  await whook.verify(JSON.stringify(req.body),{
    "svix-id": req.headers["svix-id"],
    "svix-timestamp" : req.headers["svix-timestamp"],
    "svix-signature" : req.headers["svix-signature"]
  });

  // GET THE data from request body

  const {data, type} = req.body;

  //switch case to handle different clerk webhook types
  switch(type){

    
  }


  }
  catch(error){
    console.log(error);
  }
}