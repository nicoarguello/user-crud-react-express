const express = require('express');
const router = express.Router();
const {User, Position} = require('../models');


/* GET /users/all */
router.get('/all', async (req, res, next) => {
    let users = await User.findAll({include: {model: Position, as: 'Position'}});
    users = users.map(user => {
        return {
            id:user.id,
            name:user.name,
            lastName:user.lastName,
            email:user.email,
            phone:user.phone,
            userName:user.userName,
            position: user.Position.name
        }
    })
    res.json(users);
});

module.exports = router;
