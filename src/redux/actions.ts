import axios from "axios";

import {
  GET_POST
} from "./const";


const serverUrl = process.env.REACT_APP_SERVER_URL;

export function getPost() {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/post`);
    return dispatch({
      type: GET_POST,
      payload: res.data,
    });
  };
}



