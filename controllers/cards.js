const path = require("path");

const getDataFromFile = require("../helpers/files");

const cardsDataPath = path.join(__dirname, "..", "data", "cards.json");

const cardsController =  (req, res) => {
  return getDataFromFile(cardsDataPath)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(500).send("Cannot send data"));
}
module.exports = {cardsController};