import axios from "axios";
import {
  GET_POST,
  GET_ALL_CONTACTS,
  GET_POST_FOLLOWS,
  GET_CONTACT,
  GET_PERFIL,
  GET_FOLLOW,
  GET_NAME_COUNTRY,
  GET_USER
} from "./const";


const serverUrl = process.env.REACT_APP_SERVER_URL;



export function getSearchName(name: string, token: any) {
  return async function (dispatch: any) {
    var res = await axios.get(
      `${serverUrl}/contact/search/${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    );

    return dispatch({
      type: GET_NAME_COUNTRY,
      payload: res.data,
    });
  };
}

export function getPost() {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/post`);
    return dispatch({
      type: GET_POST,
      payload: res.data,
    });
  };
}

export function getPostFollows(id: any, token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({
      type: GET_POST_FOLLOWS,
      payload: res.data,
    });
  };
}

export function getAllUser(token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/perfil`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({
      type: GET_ALL_CONTACTS,
      payload: res.data,
    });
  };
}

export function postPost(id: any, payload: any, token: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/post/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  };
}

export function getContact(id: any, token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/contact/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({
      type: GET_CONTACT,
      payload: res.data,
    });
  };
}

export function getPerfil(id: any, token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/perfil/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return dispatch({
      type: GET_PERFIL,
      payload: res.data,
    });
  }
}

export function getUser(id: number, token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return dispatch({
      type: GET_USER,
      payload: res.data,
    });
  }
}

export function deletePost(id: number, token: any) {
  return async function () {
    const res = await axios.delete(`${serverUrl}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };
}

export function postUser(payload: any, token: any) {
  return async function () {
    const res = await axios.post(`${serverUrl}/perfil`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  };
}

export function postContact(token: any, id: any, auth: any,) {
  return async function () {
    const res = await axios.post(`${serverUrl}/contact/${id}/${auth}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  };
}

export function deleteContact(id: any, token: any) {
  return async function () {
    const res = await axios.delete(`${serverUrl}/contact/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data
  };
}

export function getFollowers(id: any, auth: any, token: any) {
  return async function (dispatch: any) {
    const res = await axios.get(`${serverUrl}/follow/${id}/${auth}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return dispatch({
      type: GET_FOLLOW,
      payload: res.data,
    });
  }
}
