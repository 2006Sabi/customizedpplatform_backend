const bcrypt = require("bcryptjs");
const User = require("../models/User");

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  // Normalize the email
  email = email.trim().toLowerCase();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { loginUser };
