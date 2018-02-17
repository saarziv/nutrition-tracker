const express = require('express');
const usersRouter  = express.Router();
const {User} = require('../db/models/user');


usersRouter.get('/',(req,res,next) => {
  res.send("hello from users route.");

  User.find({}).then((users) => {
    console.log(users);
  });

});

usersRouter.post('/', async(req,res) => {
  const body  = req.body;
  try{
      let user = new User(body);
      await user.save();
      res.send(user.toJSON());

  } catch (e) {
      res.status(400).send(e);
  }


});

module.exports = {usersRouter};
