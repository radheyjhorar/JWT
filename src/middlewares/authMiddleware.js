

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if(!token) {
    return res.status(401).json({error: "Access Denied!"});
  }
  try {
    const decoded = jwt.verify(token, 'jwt-token-check-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({error: 'Invalid token!'});
  }
};

module.exports = verifyToken;