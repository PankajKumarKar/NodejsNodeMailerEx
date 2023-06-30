const userModel = require("../models/User.model");
const asyncHandler = require("express-async-handler");

exports.signInHandler = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailExist = await userModel.findOne({ email });

    if (emailExist)
      return res.status(400).json({
        success: false,
        message: "Email exist ! Please go to login ",
      });

    const saveDataToDb = await userModel.create({
      email,
      password,
    });

    res.send(saveDataToDb);
  } catch (error) {
    res.status(400).send("Sign up failed !");
  }
});
