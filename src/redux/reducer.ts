import {
  GET_POST,
  ActionTypes
} from "./const";

interface State {
  post: string
}

const initialState: State = {
  post: "",
};


const actionReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
}

export default actionReducer