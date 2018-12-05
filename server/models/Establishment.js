const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = require('./User');

const establishmentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  establishmentName: String,
  adress: String,
  zipCode: Number,
  phone: Number,
  type: { type: String, enum: ['PetShop', 'Hotel', 'Veterinário', 'Outros'] },
  services: [String],
  workingHours: [{ day: String, hours: [String] }]
},
{
  timestamps: true
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
