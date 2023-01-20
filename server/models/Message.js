const mongoose = require("mongoose");

const MsgSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "must provide message"],
    trim: true,
  },
});

module.exports = mongoose.model("Msg", MsgSchema);
