import {
    GET_USERS_SUCCESS,
    START_DOWNLOAD_USERS
} from '../types'


const initialState = {
    users: [],
    error: null,
    loading: false,
    page: 1
}


export default function (state = initialState, action) {
    
    switch (action.type) {
        case START_DOWNLOAD_USERS:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_SUCCESS:
            console.log(action)
            return {
                ...state,
                users: action.payload.data.slice(0,5),
                loading: false,
                page:action.page
            }
        default:
            return state
    }
}