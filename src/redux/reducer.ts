import {
  GET_POST,
  POST_POST,
  GET_POST_FOLLOWS,
  GET_CONTACT,
  GET_ALL_CONTACTS,
  GET_PERFIL,
  GET_USER,
  DELETE_POST,
  POST_USER,
  POST_CONTACT,
  GET_FOLLOW,
  ActionTypes
} from "./const";

interface State {
  post: string,
  postFollows: string,
  contact: string,
  perfil: string,
  user: string,
  follow: string,
}

const initialState: State = {
  post: "",
  postFollows: "",
  contact: "",
  perfil: "",
  user: "",
  follow: ""
};


const actionReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
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

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    case GET_ALL_CONTACTS:
      return {
        ...state,
        contact: action.payload,
      };

    case GET_PERFIL:
      return {
        ...state,
        perfil: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case DELETE_POST:
      return {
        ...state,
      };

    case POST_USER:
      return {
        ...state,
      };

    case POST_CONTACT:
      return {
        ...state,
      };

    case GET_FOLLOW:
      return {
        ...state,
        follow: action.payload,
      };

    default:
      return state;
  }
}

export default actionReducer