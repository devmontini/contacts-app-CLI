import {
  ASD,
  DSA
} from "./const";

const initialState = {
  home: [],
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case ASD:
      return {
        ...state,
        home: action.payload,
      };

    case DSA:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
