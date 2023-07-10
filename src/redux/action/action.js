



export const SET_USERNAME = 'SET_USERNAME';
export const SET_ACCESSROLE = 'SET_ACCESSROLE';
export const SET_FULLNAME = 'SET_FULLNAME';

export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username
})

export const setAccessrole = (accessrole) => ({
    type: SET_ACCESSROLE,
    payload: accessrole
})

export const setFullname = (fullname) => ({
    type: SET_FULLNAME,
    payload: fullname
})
