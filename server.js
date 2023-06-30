require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./configs/databse.config");
const userRouter = require("./routes/user.route");

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);

const HOSTNAME = "localhost";
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running At ${HOSTNAME}:${PORT}`);
});
