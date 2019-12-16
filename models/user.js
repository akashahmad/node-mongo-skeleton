'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
});


let Users = mongoose.model('Users', userSchema);

moudle.exports = Users;