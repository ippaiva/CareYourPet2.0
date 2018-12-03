const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  estabilishment: [{type: Schema.Types.ObjectId, ref: 'Estabilishment'}],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
