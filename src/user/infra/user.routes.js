const { Router } = require('express');
const { createUserHandler } = require('../application/create-user.hadler');
const userDs = require('./user.ds');

const userRouter = Router();

userRouter.get('/register', async (req, res) => {
    try {
        const { name, age } = req.query;
        if (!(name && age)) throw new Error('Validation error');

        res.status(200).json({ isOk: true, data: await createUserHandler(name, age, userDs) })
    } catch (error) {
        res.status(500).json({ isOk: false, error })
    }
})

module.exports = userRouter;