const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Establishment = require('../models/Establishment');

// POST route => to create a new establishment
router.post('/create', (req, res, next) => {
  console.log(req.body);
  Establishment.create({
    owner: req.user.id,
    establishmentName: req.body.EstablishmentName,
    address: req.body.Address,
    zipCode: req.body.ZipCode,
    phone: req.body.Phone,
    type: req.body.Type,
    services: req.body.Services,
    workingHour: req.body.WorkingHour
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route => to get a specific establishment/detailed view
router.get('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  Establishment.findById(req.params.id, req.body)
    .then(() => {
      console.log('GET');
      res.json({
        message: `Establishment with ${req.params.id} is here.`
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route => to update a specific establishment
router.put('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  Establishment.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Establishment with ${req.params.id} is updated successfully.`
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

// DELETE route => to delete a specific establishment
router.delete('/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }
  Establishment.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Establishment with ${req.params.id} is removed suceccfully.`
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
