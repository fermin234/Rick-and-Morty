const { Router } = require('express');
const { getEpisodes } = require('./controllers');

const router = Router();

router.get('/', async (req, res) => {
  try {
    res.json(await getEpisodes());
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
