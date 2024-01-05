const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required to proceed"],
    },
    email: {
      type: String,
      required: [true, "Email is required to proceed"],
      unique: [true, "Email address already exist"],
    },

    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
