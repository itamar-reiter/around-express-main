const path = require("path");

const getDataFromFile = require("../helpers/files");

const usersDataPath = path.join(__dirname, "..", "data", "users.json");

const usersController =  (req, res) => {
  return getDataFromFile(usersDataPath)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send("Cannot send data"));
}
module.exports = {usersController};