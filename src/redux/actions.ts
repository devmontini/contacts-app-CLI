import axios from "axios";

import {
  GET_POST,
  GET_ALL_CONTACTS,
  GET_POST_FOLLOWS,
  GET_CONTACT,
  GET_PERFIL,
  GET_FOLLOW,
  GET_USER
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

export function getPostFollows(id: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/post/${id}`);
    return dispatch({
      type: GET_POST_FOLLOWS,
      payload: res.data,
    });
  };
}

export function getAllUser() {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/perfil`);
    return dispatch({
      type: GET_ALL_CONTACTS,
      payload: res.data,
    });
  };
}

export function postPost(id: any, payload: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/post/${id}`, payload);
    return res.data
  };
}

export function getContact(id: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/contact/${id}`);
    return dispatch({
      type: GET_CONTACT,
      payload: res.data,
    });
  };
}

export function getPerfil(id: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/perfil/${id}`)
    return dispatch({
      type: GET_PERFIL,
      payload: res.data,
    });
  }
}

export function getUser(id: number) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/user/${id}`)
    return dispatch({
      type: GET_USER,
      payload: res.data,
    });
  }
}

export function deletePost(id: number) {
  return async function () {
    const res = await axios.delete(`${serverUrl}/post/${id}`);
    return res.data;
  };
}

export function postUser(payload: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/perfil`, payload);
    return res.data
  };
}

export function postContact(id: any, auth: any) {

  return async function () {
    const res = await axios.post(`${serverUrl}/contact/${id}`, auth);
    return res.data
  };
}

export function deleteContact(payload: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/contact`, payload);
    return res.data
  };
}

export function getFollowContact(payload: any) {
  console.log(payload);
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/follow`, payload);
    return dispatch({
      type: GET_FOLLOW,
      payload: res.data,
    });
  };
}





