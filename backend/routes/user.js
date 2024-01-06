const express = require('express');
 
const {signupUser, logiUser, loginUser} = require('../controller/userController')

const router = express.Router();

//login route
router.post('/login',loginUser)

router.post('/signup', signupUser)

module.exports = router;