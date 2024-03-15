import jwt from "jsonwebtoken";

const generateJwtToken = (user, res) => {
  const userId = user._id;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "5d", //
  });

  res
    .status(200)
    .cookie("userToken", token, {
      maxAge: 5 * 24 * 60 * 60 * 1000,
      httpOnly: true, // prevent XSS attacks cross-site scripting attacks
      sameSite: "strict", // CSRF attacks cross-site request forgery attacks
      secure: process.env.NODE_ENV !== "development",
    })
    .json({ user, token });
};

export default generateJwtToken;
