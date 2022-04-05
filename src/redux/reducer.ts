import {
  GET_POST,
  GET_USER,
  POST_POST,
  BY_FOLLOWS,
  BY_ALLS,
  ActionTypes
} from "./const";

interface State {
  post: string,
  postFollows: string,
  user: string
}

const initialState: State = {
  post: "",
  postFollows: "",
  user: ""
};


const actionReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case POST_POST:
      return {
        ...state,
      };

    case BY_FOLLOWS:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
}

export default actionReducer