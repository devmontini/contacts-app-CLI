//HOME
export const GET_POST: string = "GET_POST";
export const GET_USER: string = "GET_USER";

export const POST_POST: string = "POST_POST";

export const GET_POST_FOLLOWS: string = "GET_POST_FOLLOWS"


interface GetPost {
    type: typeof GET_POST,
    payload: any
}

interface GetUser {
    type: typeof GET_USER,
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


export type ActionTypes = GetPost | GetUser | PostPost | GetPostFollows