const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    try {
        // Authorization header se token lena
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Token not found"
            });
        }
    
        // "Bearer token" me se sirf token nikalna
        const token = authHeader.split(" ")[1];

        // Token verify karna
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Decoded data request me save karna
        req.user = decoded;

        // Agle middleware/controller par jana
        next();
    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
};
module.exports = authMiddleware;