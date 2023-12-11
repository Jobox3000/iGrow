// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    tokens: [{
        type: String,
        required: true
    }],
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
});

// Generate JsonWebToken
userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, 'your-secret-key');
    this.tokens = this.tokens.concat(token);
    await this.save();
    return token;
};
  
// Remove JsonWebToken
userSchema.methods.removeToken = async function (tokenToRemove) {
    this.tokens = this.tokens.filter(token => token !== tokenToRemove);
    await this.save();
};

const User = mongoose.model('User', userSchema);
module.exports = User;
