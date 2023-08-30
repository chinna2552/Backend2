const express = require('express');
const userRoutes = require('./userRoutes')
const router = express.Router();
// const authMiddleware = require('../middlwareAuth/Authentication');
const customerRoutes = require('./CustomerRoutes');

// router.use(authMiddleware);


router.use('/users',  userRoutes);
router.use('/customer',  customerRoutes);

module.exports = router;