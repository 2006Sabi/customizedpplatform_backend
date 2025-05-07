const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
  let { name, email, phone, address, password, confirmpassword } = req.body;

  // Normalize email
  email = email.trim().toLowerCase();

  if (password !== confirmpassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        address: newUser.address,
      },
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser };
