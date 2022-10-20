import { GET_CHARACTERS, CREATE_CHARACTER } from './actions';

const initialState = {
  listCharacters: [],
  character: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        listCharacters: action.payload,
      };
    case CREATE_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    default:
      return { ...state };
  }
}
