const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const PositionController = require('../controllers/PositionController');

router.use('/users',UserController);
// router.use('/position',PositionController);

module.exports = router;
