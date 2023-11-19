const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    site: String,
    note: String,
  },
  {
    timestamps: true,
  }
);

const accountModel = mongoose.model("account", accountSchema);

module.exports = {
  accountModel: accountModel,
};
