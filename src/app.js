const express = require('express');
const env = require('./config/index.js')
const userRouter = require('./user/infra/user.routes.js')
const app = express();

app.use('/', userRouter)

app.listen(env.PORT, () => console.log('Listening...'))