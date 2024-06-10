const router = require('express').Router();
const authController = require('../controllers/authControllers')

router.post('/login', authController.loginUser)
router.post('/register', authController.createUser)

module.exports = router
