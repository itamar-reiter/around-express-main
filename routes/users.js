const usersRouter = require("express").Router();
const {usersController} = require('../controllers/users');

usersRouter.get("/users", usersController);

module.exports = usersRouter;
