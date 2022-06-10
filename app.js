const express = require('express');
// listen to port 3000
const { PORT = 3001 } = process.env;

const usersRouter = require("./routes/users");

const app = express();

app.use('/', usersRouter);

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
});