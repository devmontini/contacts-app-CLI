import axios from "axios";

import {
  GET_POST,
  GET_USER,
  BY_FOLLOWS,
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

export function getUser(name: number) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/user/${name}`);
    return dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
}

export function postPost(id: number, payload: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/post/${id}`, payload);
    return res.data
  };
}

export function byFollows(payload: number) {
  return {
    type: BY_FOLLOWS,
    payload,
  };
}



