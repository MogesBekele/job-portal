import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized to access this route",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.company = await Company.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Not authorized to access this route",
    });
  }
};

// middleware route to protect the company data 
// the company data with out passwords
