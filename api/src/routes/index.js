const { Router } = require('express');
const characters = require('./characters');
const episodes = require('./episodes');

const router = Router();

// Configurar los routers
router.use('/characters', characters);
router.use('/episodes', episodes);

module.exports = router;
