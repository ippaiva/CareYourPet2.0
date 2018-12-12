const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const establishmentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  establishmentName: String,
  address: String,
  zipCode: Number,
  phone: Number,
  type: { type: String, enum: ['PETSHOP', 'HOTEL', 'VETERINARIO', 'OUTROS'] },
  services: [String],
  workingHours: String,
  site: String
},
{
  timestamps: true
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
