export const CONSTANTS = {
    // SERVICE_URL: "https://todo-mern-r4eq.onrender.com"   //
    // SERVICE_URL: "https://chat-mern-a270.onrender.com" //Singapore
    SERVICE_URL: "https://chat-app-production-b1df.up.railway.app"
    // SERVICE_URL: "http://localhost:3001"

}

export const API_END_POINTS = {
    CREATE_USER: '/user/createUser/',
    UPDATE_PROFILE: "/user/updateProfile/",
    LOGIN: '/user/login/',
    GET_PROFILE: "/user/profile/",
    CHANGE_PASSWORD: "/user/changePassword/",
    GENERATE_OTP: "/user/generateOtp/",
    RESET_PASSWORD: '/user/resetPassword/',
    VERIFY_OTP: '/user/verifyOtp/',
    
    CREATE_TODO: "/todos/createTodo/",
    UPDATE_TODO: "/todos/updateTodo/",
    FETCH_TODOS: "/todos/fetchTodos/",

    CREATE_CASHBOOK: "/cb/createNewCashbook/",
    GET_CASHBOOK_NAMES: '/cb/getCashbookNames/',
    CREATE_NEW_ENTRY: "/cb/createNewEntry/",
    UPDATE_ENTRY: '/cb/updateEntry/',
    GET_CASHBOOK_ENTRIES: '/cb/getCashbookDetails/',
    DELETE_ENTRY: "/cb/deleteEntry/",

    SEND_FEEDBACK: "/user/feedback/",

    CREATE_CHAT: "/chat/createChat/",
    GET_CHATS: "/chat/getChats/",
    GET_USERS: "/chat/getUsers/",
    CREATE_MESSAGE: "/chat/createMessage/",
    GET_MESSAGES: "/chat/getMessages/",
    
    CREATE_NOTES: "/notes/createNotes/",
    UPDATE_NOTES: "/notes/updateNotes/",
    FETCH_NOTES_LIST: "/notes/fetchNotesList/"
}

export const modes = {
    SAVE: "SAVE",
    UPDATE: "UPDATE"
}

export const STATUSES = {
    NEW: "New",
    COMPLETED: "Completed",
    DELETED: "Deleted"
}
