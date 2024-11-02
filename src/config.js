export const CONSTANTS = {
    // SERVICE_URL: "https://todo-mern-r4eq.onrender.com"   //
    // SERVICE_URL: "https://todo-backend-dcc7.onrender.com" //Singapore
    // SERVICE_URL: "http://localhost:3001"
    SERVICE_URL: "https://chat-todo-notes-production.up.railway.app"


}

export const API_END_POINTS = {
    CREATE_USER: '/user/createUser/',
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

    CREATE_CHAT: "/chats/createChat/",
    GET_CHATS: "/chats/getChats/",
    CREATE_MESSAGE: "/chats/createMessage/",
    GET_MESSAGES: "/chats/getMessages/",
    
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
