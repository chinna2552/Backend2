const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middlwareAuth/Authentication');
const userController = require('../Controller/UserController');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

// router.use(authMiddleware);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;