export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
const axios = require('axios');

export const getCharacters = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/characters`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_CHARACTERS,
          payload: data,
        })
      );
  };
};
//fetch
// export const createCharacter = (cahracterInfo) => {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/characters`, cahracterInfo)
//       .then((response) => response.json())
//       .then((data) =>
//         dispatch({
//           type: CREATE_CHARACTER,
//           payload: data,
//         })
//       );
//   };
// };

// axios
export const createCharacter = (cahracterInfo) => {
  return async (dispatch) => {
    let response = await axios.post(
      `http://localhost:3001/characters`,
      cahracterInfo
    );
    return dispatch({
      type: CREATE_CHARACTER,
      payload: response.data,
    });
  };
};
