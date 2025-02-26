import jwt from 'jsonwebtoken';
import Company from '../models/Company';

export const protectCompany = async (req, res, next) => {

  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.company = await Company.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      return res.json({ success: false, message: 'Not authorized to access this route' });
    }
  }

  if (!token) {
    return res.json({ success: false, message: 'Not authorized to access this route' });
  }

}