const express = require('express');
const usersRouter = require("./routes/users");
const cardsRouter = require('./routes/cards');
// listen to port 3000
const { PORT = 3001 } = process.env;


const app = express();

app.use('/', usersRouter);
app.use('/', cardsRouter);
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
});