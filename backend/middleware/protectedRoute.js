import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;
    if (!token) {
      return res.status(401).json({ error: "Unauthorised - no token" });
    }

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifiedToken) {
      return res.status(401).json({ error: "Unauthorised - Invalid token" });
    }

    const user = await User.findById(verifiedToken.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log("error in protectedRoute middleware: ", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
