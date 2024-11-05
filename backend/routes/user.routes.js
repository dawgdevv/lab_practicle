import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });
  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ success: true, user: user });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
