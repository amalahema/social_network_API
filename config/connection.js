// import the functionality to varaiable through require buld in function
const mongoose = require('mongoose');

//connect mongoose with the mongodb in your system
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB');

//export connection
module.exports = mongoose.connection;