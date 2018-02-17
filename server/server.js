require("./config/config");
require("./db/mongo-connect");
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const path = require('path');
const {usersRouter} = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../dist')));

app.use("/users",usersRouter);

app.get("*", (req,res,next) => {
  res.sendFile("index.html")
});

let server = app.listen(PORT,() => console.log(`listening on port ${PORT}...`));

module.exports = {server,app};
