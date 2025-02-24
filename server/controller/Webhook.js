import { Webhook } from "svix";
import User from "../models/User";

// API CONTROLLER fun to manage clerk user with database
export const clerkWebhooks = async (req, res) => {
  try {
    // CREATE A svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    // VERIFY THE headers

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // GET THE data from request body

    const { data, type } = req.body;

    //switch case to handle different clerk webhook types
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await User.create(userData);
        res.json({});
        break;
      }
      // CREATE A NEW USER IN DATABASE
      case "user.updated": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };
        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }
      // UPDATE THE USER IN DATABASE
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }
      // default case
      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    res.json({success: false, message: "Webhook faild"});
  }
};
