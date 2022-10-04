const { Router } = require('express');
const characters = require('./charactersRouters.js');
const episodes = require('./episodesRouters.js');

const router = Router();

// Configurar los routers
router.use('/characters', characters);
router.use('/episodes', episodes);

module.exports = router;
