const mongoose  = require('mongoose');
const {Schema} = mongoose;

const UsersSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Users', UsersSchema);