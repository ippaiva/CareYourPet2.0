const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Establishment = require('../models/Establishment');

// POST route => to create a new establishment
router.post('/create', (req, res, next) => {
  Establishment.create({
    owner: req.body.owner, // req.user.id apos login esta ok.
    estabilishimentName: req.body.estabilishimentName,
    adress: req.body.adress,
    zipCode: req.body.zipCode,
    phone: req.body.phone,
    type: req.body.type,
    services: req.body.services,
    workingHours: req.body.workingHours
  })
    .then((response) => {
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
        message:  `Establishment with ${req.params.id} is here.`
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
