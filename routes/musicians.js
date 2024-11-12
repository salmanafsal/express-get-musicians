const {Musician} = require('../models/index.js')
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const { name, instrument } = req.body;
      const newMusician = await Musician.create({ name, instrument });
      res.status(201).json(newMusician);
    } catch (error) {
      res.status(400).json({ error: 'Unable to create Musician', details: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const newMusician = await Musician.findAll();
      res.status(200).json(newMusician);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch Musicians', details: error.message });
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const Musicians = await Musician.findByPk(req.params.id);
      if (!Musicians) return res.status(404).json({ error: 'Musician not found' });
      res.status(200).json(Musicians);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch Musician', details: error.message });
    }
  });


  router.put('/:id', async (req, res) => {
    try {
      const { name, instrument } = req.body;
      const [updated] = await Musician.update(
        { name, instrument },
        { where: { id: req.params.id } }
      );
      if (!updated) return res.status(404).json({ error: 'Musician not found' });
      const updatedMusician = await Musician.findByPk(req.params.id);
      res.status(200).json(updatedMusician);
    } catch (error) {
      res.status(400).json({ error: 'Unable to update Musician', details: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const deleted = await Musician.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: 'Musician not found' });
      res.status(204).send(); // Successful deletion, no content
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete Musician', details: error.message });
    }
  });

  module.exports = router;