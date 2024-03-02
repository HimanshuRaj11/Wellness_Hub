const router = require("express").Router();

const {RegisterUser} = require("../Controller/User.controller")

router.post("/api/v1/register", RegisterUser);

module.exports = router;