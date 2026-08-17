const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const authMiddleware = async (req, res, next) => {

    try {

        // 1. Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Token required"
            });
        }


        // 2. Token nikalo
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid token format"
            });
        }


        // 3. JWT verify
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // 4. Token mein ID hai ya nahi
        if (!decoded.id) {
            return res.status(401).json({
                success: false,
                message: "Invalid user ID"
            });
        }


        // 5. Database mein user check
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User no longer exists"
            });
        }


        // 6. User information request mein save
        req.user = {
            id: user._id,
            role: user.role
        };


        // 7. Next middleware/controller
        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;