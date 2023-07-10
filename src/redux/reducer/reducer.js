

import { SET_ACCESSROLE, SET_USERNAME, SET_FULLNAME } from "../action/action";

const initialState = {
    username: null,
    accessrole: null,
    fullname: null
}


const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case SET_FULLNAME:
            return {
                ...state,
                fullname: action.payload
            }
        case SET_ACCESSROLE:
            return {
                ...state,
                accessrole: action.payload
            }
    }
}

export default roleReducer;