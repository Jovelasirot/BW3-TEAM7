import { QUERY_SEARCH } from "../actions/actions";

const initialState = {
  content: [],
};

const querySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default querySearchReducer;
