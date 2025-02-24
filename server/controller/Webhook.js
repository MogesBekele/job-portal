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
    case "user.created":{
      const userData ={
        _id: data.id,
        email: data.email_address[0].email_address,
        
      }
    }
      // CREATE A NEW USER IN DATABASE
   
    case "user.updated":
      // FIND THE USER BY ID AND UPDATE THE USER
      const updatedUser = await User.findByIdAndUpdate(data.id,{
        name: data.name,
        email: data.email,
        image: data.image
      },{new: true});
      console.log(updatedUser);
      break;
    case "user.deleted":
      // FIND THE USER BY ID AND DELETE THE USER
      const deletedUser = await User.findByIdAndRemove(data.id);
      console.log(deletedUser);
      break;
    default:
      break


  }


  }
  catch(error){
    console.log(error);
  }
}