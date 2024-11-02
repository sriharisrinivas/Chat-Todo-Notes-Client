import { API_END_POINTS, CONSTANTS } from "../../config";
import { REDUX_CONSTANTS } from "../reduxConstants";
import { startLoaderAction, stopLoaderAction } from "./LoaderAction";

const createChatAction = () => {
    return {
        type: REDUX_CONSTANTS.CREATE_CHAT
    };
};
const getChatsAction = (payload) => {
    return {
        type: REDUX_CONSTANTS.GET_CHATS,
        payload: payload
    };
};
const createMessageAction = () => {
    return {
        type: REDUX_CONSTANTS.CREATE_MESSAGE
    };
};
const getMessagesAction = (payload) => {
    return {
        type: REDUX_CONSTANTS.GET_MESSAGES,
        payload: payload
    };
};

export const fetchChats = () => {
    return (dispatch) => {
        dispatch(startLoaderAction());
        let url = process.env.REACT_APP_SERVER_URL + API_END_POINTS.GET_CHATS;
        axios.get(url).then((response) => {
            dispatch(stopLoaderAction());
            dispatch(getChatsAction(response.data));
        }).catch((error) => {
            dispatch(stopLoaderAction());
            console.log(error);
        });
    };
};

export const createChat = (payload) => {
    return (dispatch) => {
        dispatch(startLoaderAction());
        let url = process.env.REACT_APP_SERVER_URL + API_END_POINTS.CREATE_CHAT;
        axios.post(url, payload).then((response) => {
            dispatch(stopLoaderAction());
            dispatch(fetchChats());
        }).catch((error) => {
            dispatch(stopLoaderAction());
            console.log(error);
        });
    };
};

export const fetchMessages = (chatId) => {
    return (dispatch) => {
        dispatch(startLoaderAction());
        let url = process.env.REACT_APP_SERVER_URL + API_END_POINTS.GET_MESSAGES + chatId;
        axios.get(url).then((response) => {
            dispatch(stopLoaderAction());
            dispatch(getMessagesAction(response.data));
        }).catch((error) => {
            dispatch(stopLoaderAction());
            console.log(error);
        });
    };
};


export const createMessage = (payload) => {
    return (dispatch) => {
        dispatch(startLoaderAction());
        let url = process.env.REACT_APP_SERVER_URL + API_END_POINTS.CREATE_MESSAGE;
        axios.post(url, payload).then((response) => {
            dispatch(stopLoaderAction());
            dispatch(fetchMessages());
        }).catch((error) => {
            dispatch(stopLoaderAction());
            console.log(error);
        });
    };
};