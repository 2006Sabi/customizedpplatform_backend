const User = require("../models/User");

const getUserProfile = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).select("-password"); // exclude password
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getUserProfile };
