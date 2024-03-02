const router = require("express").Router();

const {RegisterUser,LoginUser, FetchUser, Logout} = require("../Controller/User.controller");
const verifyToken = require("../Middleware/VerifyUser");

router.post("/api/v1/register", RegisterUser);
router.post("/api/v1/Login", LoginUser);
router.get("/api/v1/fetch-user",verifyToken, FetchUser);
router.get("/api/v1/logout-user",verifyToken, Logout);

module.exports = router;