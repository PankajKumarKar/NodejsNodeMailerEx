const { Schema, model } = require("mongoose");
const { nodeMailerFun } = require("../controller/nodemailer.controller");

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.post("save", async function (doc) {
  nodeMailerFun(doc);
});

module.exports = model("User", userSchema);
