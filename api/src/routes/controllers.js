const { Router } = require('express');
const axios = require('axios');
const { Character, Episode } = require('../db.js');

const router = Router();

async function getAllCharacters() {
  try {
    //creacion de un character
    // await Character.create({ name: 'fermin' });
    //peticion a la api
    let apiInfo = await axios.get(`https://rickandmortyapi.com/api/character`);
    apiInfo = apiInfo.data.results.map((e) => {
      return {
        id: e.id,
        name: e.name,
        species: e.especies,
        origin: e.origin.name,
        image: e.image,
        created: e.created,
      };
    });

    //peticion a la DB
    apiInfo = apiInfo.concat(
      await Character.findAll({
        includes: [Episode],
      })
    );

    return apiInfo;
  } catch (error) {
    return error;
  }
}

async function createCharacter(name, species, origin, image) {
  try {
    if (!name) throw new Error('Debe ingresar un nombre.');
    if (name.length < 2)
      throw new Error('El nombre debe contener la menos dos letras.');
    name = name[0].toUpperCase().concat(name.slice(1));
    const [user, created] = await Character.findOrCreate({
      where: { name },
      defaults: { name, species, origin, image },
    });
    return created
      ? `${name} creado exitosamente.`
      : `El personaje ${name} ya existe.`;
  } catch (error) {
    return error.message;
  }
}

async function getEpisodes() {
  try {
    //veo si en la db tengo algun episode
    let DBinfo = await Episode.findAll();
    if (DBinfo.length) return DBinfo;
    //si mi db no tiene nada, los pido en la api
    let apiInfo = await axios.get(`https://rickandmortyapi.com/api/episode`);
    apiInfo = apiInfo.data.results?.map((e) => {
      return { episode: e.id, name: e.name };
    });
    //vuelco los datos en mi db
    await Episode.bulkCreate(apiInfo);

    return apiInfo;
  } catch (error) {
    return error.message;
  }
}

async function getCharacterById(id) {
  try {
    //busco en la db
    if (id.length > 5) {
      let dbInfo = await Character.findOne({
        where: { id: id },
      });
      if (Object.keys(dbInfo).length) return dbInfo;
    }
    //busco en la api
    let apiInfo = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    apiInfo = apiInfo.data;
    return {
      id: apiInfo.id,
      name: apiInfo.name,
      species: apiInfo.especies,
      origin: apiInfo.origin.name,
      image: apiInfo.image,
    };
  } catch (error) {
    return 'No existe un personaje relacionado a ese ID.';
  }
}
//asd
module.exports = {
  getAllCharacters,
  createCharacter,
  getEpisodes,
  getCharacterById,
};
