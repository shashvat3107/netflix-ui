import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to verify JWT
function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Get user data
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ email: user.email, name: user.name, phone: user.phone, myList: user.myList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update myList
router.post('/mylist', auth, async (req, res) => {
  try {
    const { myList } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      { myList },
      { new: true }
    );
    res.json({ myList: user.myList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user profile (name, phone)
router.post('/update', auth, async (req, res) => {
  try {
    const { name, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      { name, phone },
      { new: true }
    );
    res.json({ email: user.email, name: user.name, phone: user.phone, myList: user.myList });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 