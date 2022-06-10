const path = require("path");

const getDataFromFile = require("../helpers/files");

const userDataPath = path.join(__dirname, "..", "data", "users.json");

const usersController =  (req, res) => {
  return getDataFromFile(userDataPath)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send("Cannot send data"));
}
module.exports = {usersController};