const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // Extract token from request headers
    const token = req.headers.authorization;

    // Verify token and extract email from payload
    jwt.verify(token, 'your_secret_key_here', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Store email from token in request object for later use
        req.email = decoded.email;
        next();
    });
};

module.exports = authenticateUser;
