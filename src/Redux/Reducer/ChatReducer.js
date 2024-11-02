import { REDUX_CONSTANTS } from "../reduxConstants";

const initialState = {
    chats: [],
    messages: []
}   

export const chatsReducer = (state  = initialState, action) => { 
    switch(action.type) {
        case REDUX_CONSTANTS.GET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case REDUX_CONSTANTS.GET_MESSAGES: 
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state
    }
 }