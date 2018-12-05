const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  lastName: String,
  email: String,
  phone: Number,
  zipcode: Number,
  address: String,
  pet: [{ type: Schema.Types.ObjectId, ref: 'Pet' }]
},
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
