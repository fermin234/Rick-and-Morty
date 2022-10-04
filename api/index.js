const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(() => {
<<<<<<< HEAD
  // getEpisodes();
=======
>>>>>>> f89af15b98e68bde64129364418aa3c899b3fe7e
  server.listen(3001, () => {
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});
