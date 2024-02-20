import {
  UPDATE_USER_POST,
  TURN_OFF_SPINNER,
  TURN_ON_SPINNER,
} from "../actions/actions";

const initialState = {
  content: [],
};

const addUserPost = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case TURN_OFF_SPINNER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER_POST:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default addUserPost;