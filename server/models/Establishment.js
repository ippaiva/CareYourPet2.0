const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const establishmentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  establishmentName: String,
  address: String,
  zipCode: Number,
  phone: Number,
<<<<<<< HEAD
  type: { type: String, enum: ['PETSHOP', 'HOTEL', 'VETERINARIO', 'OUTROS'] },
  services: String,
  workingHours: String,
  site: String,
},
{
  timestamps: true,
=======
  type: {
    type: String,
    enum: ['PETSHOP', 'HOTEL', 'VETERINARIO', 'OUTROS']
  },
  services: [String],
  workingHours: String,
  site: String
}, {
  timestamps: true
>>>>>>> 6b605dd94935776285561e4c78fad5f7874b79e6
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;