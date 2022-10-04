const { Router } = require('express');
const axios = require('axios');
const {
  getAllCharacters,
  createCharacter,
  getCharacterById,
} = require('./controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.json(await getAllCharacters());
  } catch (error) {
    res.status(404).json(error.message);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    res.json(await getCharacterById(id));
  } catch (error) {
    res.json(error.message);
  }
});

router.post('/', async (req, res) => {
  const { name, species, origin, image } = req.body;
  try {
    res.json(await createCharacter(name, species, origin, image));
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
