//HOME
export const GET_POST: string = "GET_POST";
export const GET_USER: string = "GET_USER";

export const POST_POST: string = "POST_POST";

export const BY_FOLLOWS: string = "BY_FOLLOWS"
export const BY_ALLS: string = "BY_ALLS"


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

interface ByFollows {
    type: typeof BY_FOLLOWS,
    payload?: null
}

interface ByAlls {
    type: typeof BY_ALLS,
    payload?: null
}

export type ActionTypes = GetPost | GetUser | PostPost | ByAlls | ByFollows