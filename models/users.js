const mongoose = require('mongoose');

const userSchema = mongoose.Schema({  // SCHEMA DE MA COLLECTION USER 
    name: String, 
    email: String, 
    password: String,
});

const User = mongoose.model('users', userSchema);// MODEL DE LA COLLECTION 

module.exports = User;