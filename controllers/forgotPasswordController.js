const crypto = require("crypto");
const User = require("../models/User");

const sendPasswordResetLink = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const expireTime = Date.now() + 3600000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = expireTime;

    await user.save();

    // Simulate sending email (In real app, send actual email)
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    console.log("Reset Link:", resetLink);

    res.status(200).json({
      message: `Password reset link sent to ${email}`,
      resetLink, // for testing only
    });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { sendPasswordResetLink };
