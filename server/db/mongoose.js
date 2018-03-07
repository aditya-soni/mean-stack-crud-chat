const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/ChatApp'
mongoose.connect(url);

module.exports = {mongoose};