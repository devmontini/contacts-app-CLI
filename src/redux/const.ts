//HOME
export const GET_POST: string = "GET_POST";
export const GET_POST_FOLLOWS: string = "GET_POST_FOLLOWS"
export const GET_CONTACT: string = "GET_CONTACT";
export const GET_ALL_CONTACTS: string = "GET_ALL_CONTACTS";
export const GET_PERFIL: string = "GET_PERFIL"
export const GET_USER: string = "GET_USER"
export const POST_POST: string = "POST_POST";
export const DELETE_POST: string = "DELETE_POST"
export const POST_USER: string = "POST_USER"
export const POST_CONTACT: string = "POST_CONTACT"
export const DELETE_CONTACT: string = "DELETE_CONTACT"
export const GET_FOLLOW_USER: string = "GET_FOLLOW_USER"
export const GET_FOLLOW: string = "GET_FOLLOW"

interface GetFollow {
    type: typeof GET_FOLLOW,
    payload: any
}

interface GetPost {
    type: typeof GET_POST,
    payload: any
}

interface PostPost {
    type: typeof POST_POST,
    payload?: null
}

interface GetPostFollows {
    type: typeof GET_POST_FOLLOWS,
    payload?: null
}

interface GetContact {
    type: typeof GET_CONTACT,
    payload?: null
}

interface GetAllContacts {
    type: typeof GET_ALL_CONTACTS,
    payload?: null
}

interface GetPerfil {
    type: typeof GET_PERFIL
    payload?: null
}
interface GetUser {
    type: typeof GET_USER
    payload?: null
}

interface DeletePost {
    type: typeof DELETE_POST
    payload?: null
}

interface PostUser {
    type: typeof POST_USER
    payload?: null
}

interface PostContact {
    type: typeof POST_CONTACT
    payload?: null
}

interface deleteContact {
    type: typeof DELETE_CONTACT
    payload?: null
}



export type ActionTypes = deleteContact | PostContact | GetPost | PostUser | GetPerfil | DeletePost | PostPost | GetPostFollows | GetContact | GetAllContacts | GetUser | GetFollow