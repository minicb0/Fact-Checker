const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: "A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json("Invalid Token");
  }
  return next();
};
