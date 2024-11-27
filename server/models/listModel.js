const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    guests: {
      type: [String], // Array of strings
      default: [], // Optional, defaults to an empty array
    },
    items: {
      type: [
        {
          name: { type: String, required: true },
          quantity: { type: Number, default: 1 },
          completed: { type: Boolean, default: false },
        },
      ],
      default: [], // Optional, defaults to an empty array
    },
    archived: {
      type: Boolean,
      default: false, // Defaults to false
    },
  },
  { timestamps: true }
); // Automatically adds `createdAt` and `updatedAt`

module.exports = mongoose.model("List", listSchema);
