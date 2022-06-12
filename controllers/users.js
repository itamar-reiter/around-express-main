const path = require("path");

const getDataFromFile = require("../helpers/files");

const usersDataPath = path.join(__dirname, "..", "data", "users.json");

const getUsers = (req, res) => {
  return getDataFromFile(usersDataPath)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(500).send("Cannot send data"));
};

const getUserById = (req, res) => {
  console.log("get user by id is on");
  return getDataFromFile(usersDataPath)
    .then((users) => users.find((user) => user._id.toString() === req.params.id))
    .then((user) => {
      console.log(user);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send("not found user with " + req.params.id + "id");
      }
    })
    .catch((err) => res.status(500).send("Cannot send data"));
};
module.exports = { getUsers, getUserById };
