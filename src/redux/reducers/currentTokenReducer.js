import { CURRENT_TOKEN } from "../actions/actions";

const initialState = {
  token: "",
};

const addCurrentToken = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default addCurrentToken;
