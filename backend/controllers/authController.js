import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateJwtToken from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "Username Doesn't exists" });
    }
    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ msg: "Invalid Password" });
    }

    generateJwtToken(user._id, res);

    res.status(201).json({ user, message: "User logged in" });
  } catch (err) {
    console.log("error at login controller: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password didn't match!" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //generate JWT token
      generateJwtToken(newUser._id, res);

      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (err) {
    console.log("error at signup controller: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("userToken", "", { maxAge: 0 });
    res.status(200).json({ message: "user logged out successfully" });
  } catch (err) {
    console.log("error at logout controller: ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
