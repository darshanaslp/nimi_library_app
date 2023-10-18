const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const protectRoute = require('../middlewares/authMiddleware');
const User = require('../models/user'); // Your User model

const router = express.Router();
const jwtSecret = 'your-secret-key'; // Replace with your own secret key

// Login route to issue a JWT token
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = await User.findOne({ where: { username } });
  console.log(user);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify the password
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });

    return res.json({ token });
  }

  res.status(401).json({ error: 'Invalid token' });
});

// Route for refreshing the access token using a valid refresh token
router.post('/refresh-token', async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: 'Refresh token not provided' });
  }
});

module.exports = router;