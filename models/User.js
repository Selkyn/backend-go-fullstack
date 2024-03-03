const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //pour avoir des propriétés unique dans ma table

const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator); //permet d'appliquer le plugin uniqueValidator

module.exports = mongoose.model('User', userSchema);