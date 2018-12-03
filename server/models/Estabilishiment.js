const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = require('./User');

const estabilishimentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  estabilishimentName: String,
  adress: String,
  zipCode: Number,
  phone: Number,
  type: { type: [String], enum: ['PetShop', 'Hotel', 'Veterinário', 'Outros'] },
  services: [String]
},
{
  timestamps: true
});

const Estabilishiment = mongoose.model('Establishment', estabilishimentSchema);
module.exports = Estabilishiment;
