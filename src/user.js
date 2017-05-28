const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// define a schema
const UserSchema = new Schema({
   name: String // js string type
});
// create user collection automatically if not exist
const User = mongoose.model('user', UserSchema); // represent the entire collection


module.exports = User;