const mongoose = require('mongoose');

const Establishment = require('../models/Establishment');

mongoose
  .connect('mongodb://localhost/server', {
    useNewUrlParser: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const establishment = [{
  establishmentName: 'PARKSHOTEL',
  address: 'TEST',
  zipCode: 7114060,
  phone: 1124403578,
  type: 'HOTEL',
  services: ['VET', 'ADESTRAMENTO', 'OUTROS'],
  workingHours: 'SEG A SAB das 08:00 as 00:00',
  site: 'wwww.fake.com.br'
},
{
  establishmentName: 'JOHNSONS',
  address: 'FAKENU',
  zipCode: 7113060,
  phone: 1124404578,
  type: 'PETSHOP',
  services: ['VET', 'BANHO', 'TOSA'],
  workingHours: 'SEG A SAB das 08:00 as 19:00',
  site: 'wwww.johns.com.br'
},
{
  establishmentName: 'Habbibs',
  address: 'AbuDan',
  zipCode: 7134060,
  phone: 1124443578,
  type: 'HOTEL',
  services: ['VET', 'ADESTRAMENTO', 'OUTROS'],
  workingHours: 'SEG A SAB das 08:00 as 00:00',
  site: 'wwww.abu.com.br'
},
{
  establishmentName: 'ClanPet',
  address: 'Av.Mans',
  zipCode: 7114360,
  phone: 1124463578,
  type: 'PETSHOP',
  services: ['VET', 'ADESTRAMENTO', 'OUTROS'],
  workingHours: 'SEG A SAB das 09:00 as 20:00',
  site: 'wwww.clapt.com.br'
},
{
  establishmentName: 'FransXap',
  address: 'Homesweethome',
  zipCode: 71143060,
  phone: 1122403578,
  type: 'PETSHOP',
  services: ['VET', 'ADESTRAMENTO', 'OUTROS'],
  workingHours: 'SEG A SAB das 10:00 as 22:00',
  site: 'wwww.frans.com.br'
}
];


Establishment.create(establishment, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${establishment.length}`);
  mongoose.connection.close();
});