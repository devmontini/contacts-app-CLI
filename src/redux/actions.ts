import axios from "axios";

import {
  ASD,
  DSA
} from "./const";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export function getAsd() {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}asd`);
    return dispatch({
      type: ASD,
      payload: res.data,
    });
  };
}

export function getDsa() {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}asd`);
    return dispatch({
      type: ASD,
      payload: res.data,
    });
  };
}


