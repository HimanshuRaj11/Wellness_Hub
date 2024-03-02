
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    // Get token from cookies, headers, or query parameters
    const token = req.cookies.WellnessHub;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: "Access denied. Token is required." });
    }

    // Verify the token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token." });
        }
        // If token is valid, attach the decoded user information to the request object
        req.user = decoded;
        next();
    });
}


module.exports = verifyToken;