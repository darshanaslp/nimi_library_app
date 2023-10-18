const jwt = require('jsonwebtoken');
const jwtSecret = 'your-secret-key'; // Replace with your own secret key

const protectRoute = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token is invalid or expired' });
    }

    req.user = decoded; // Attach the decoded user information to the request object
    next();
  });
};

module.exports = protectRoute;