const { Router } = require("express");
const { signInHandler } = require("../controller/signIn.controller");

const router = Router();

router.post("/signIn", signInHandler);

module.exports = router;
