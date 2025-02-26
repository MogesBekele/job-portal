import jwt from 'jsonwebtoken';
import Company from '../models/Company';

export const protectCompany = async (req, res, next) => {

  const token = req.headers.token;

  if (!token) {
    return res.json({ success: false, message: 'Not authorized to access this route' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const company = await Company.findById(decoded.id.select('-password'));

    if (!company) {
      return res.json({ success: false, message: 'No company found with this id' });
    }

    req.company = company;

    next();
  } catch (error) {
    return res.json({ success: false, message: 'Not authorized to access this route' });
  }
 

}