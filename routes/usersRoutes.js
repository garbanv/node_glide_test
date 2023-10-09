const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')
const {generateAccesToken,validateJwt} = require('../middlewares/auth')
 

router.get("/",validateJwt,controller.getAllUsers)
router.get("/getAllUsers",controller.getAllUsers)
router.post("/getMoney",controller.getMoney)
router.post("/createToken",controller.createAccessToken)

module.exports = router