const mongoose = require('mongoose');
const _ = require('lodash');

const UserSchema = mongoose.Schema({
  name:{
    required:true,
    trim:true,
    type:String
  },
  password:{
    required:true,
    trim:true,
    type:String,
    minLength:2,
  },
  age:{
    required:true,
    type:Number
  },
  height:{
    required:true,
    type:Number
  }
});

UserSchema.methods.toJSON = function () {
  let user = this;
  return _.pick(user,['_id','name','age','height'])
};
const User = mongoose.model('users',UserSchema);

module.exports = {User};
