import {
  GET_POST,
  GET_USER,
  POST_POST,
  GET_POST_FOLLOWS,
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

    case GET_POST_FOLLOWS:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
}

export default actionReducer