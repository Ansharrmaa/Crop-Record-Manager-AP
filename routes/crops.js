const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// POST create
router.post('/', async (req, res) => {
  try {
    const newCrop = new Crop(req.body);
    const saved = await newCrop.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all
router.get('/', async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// DELETE a crop by ID
router.delete('/:id', async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);
    if (!crop) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
