import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const myContacts = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );

    res.status(200).json(myContacts);
  } catch (err) {
    console.log("error at getting users controller ", err.message);
    return res.status(400).json({ error: "Internal server error" });
  }
};
