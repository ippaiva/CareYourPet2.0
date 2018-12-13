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
  establishmentName: 'Cobasi Augusta',
  address: 'Rua Augusta, 2380.',
  zipCode: 01412000,
  phone: 1138318999,
  type: 'PETSHOP',
  services: 'Banho, Tosa, Vendas, etc.',
  workingHours: 'SEG A SAB das 09:00 às 22:45',
  site: 'https://www.cobasi.com.br/'
},
{
  establishmentName: 'Petz Augusta',
  address: 'Rua Augusta, 215.',
  zipCode: 01305000,
  phone: 1121817365,
  type: 'PETSHOP',
  services: 'Banho, Tosa, Vendas, etc.',
  workingHours: 'SEG A DOM das 08:00 às 24:00',
  site: 'https://www.petz.com.br/'
},
{
  establishmentName: 'Pet Gardens Club',
  address: 'Rua Pamplona, 834.',
  zipCode: 01405001,
  phone: 1145080044,
  type: 'HOTEL',
  services: 'Veterinário, Hotel, etc.',
  workingHours: 'SEG A SAB das 08:00 as 00:00',
  site: 'https://www.facebook.com/petclubejardins/'
},
{
  establishmentName: 'Encrenquinhas Petshop',
  address: 'Rua Alagoas, 184.',
  zipCode: 01242000,
  phone: 1132141485,
  type: 'PETSHOP',
  services: 'Veterinário, Hotel , etc.',
  workingHours: 'SEG a SEX das 08:30 às 18:00. SAB das 08:30 às 17:00',
  site: 'http://www.encrenquinhas.com.br/'
},
];


Establishment.create(establishment, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${establishment.length}`);
  mongoose.connection.close();
});