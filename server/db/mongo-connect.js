const mongoose = require('mongoose');

//need to create environment var in  heroku for it to work.
const url = process.env.MONGODB_URI_HEROKU || process.env.MONGODB_URI;

mongoose.connect(url);

module.exports = {mongoose};
