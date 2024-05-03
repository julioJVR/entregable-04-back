const express = require('express');
const { index, create, show, destroy, update, verifyCode, login, logged } = require('../controllers/user.controller');
const verifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT, index)
    .post(create);

userRouter.route('/login')
    .post(login);

userRouter.route('/me')
    .post(verifyJWT, logged);

userRouter.route('/verify/:code')
    .get(verifyCode);

userRouter.route('/:id')
    .get(verifyJWT, show)
    .delete(verifyJWT, destroy)
    .put(verifyJWT, update);

module.exports = userRouter;