const cardsRouter = require("express").Router();
const {cardsController} = require('../controllers/cards');

cardsRouter.get("/cards", cardsController);

module.exports = cardsRouter;
