const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Eva' },
        { id: 4, name: 'Evgen' },
        { id: 5, name: 'Ksusha' },
        { id: 6, name: 'Leo' },
        { id: 7, name: 'Donny' },
        { id: 8, name: 'Mike' },
        { id: 9, name: 'Raphael' },
    ],
    messagesData: [
        { id: 1, name: 'Hello?' },
        { id: 2, name: 'Whats up' },
        { id: 3, name: 'It impossible' },
        { id: 4, name: 'Yes' },
        { id: 5, name: 'New user join on web' },
        { id: 6, name: 'Hi all' },
        { id: 7, name: 'Hi' },
    ],
    newMessageBody: '',

};


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 8, name: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})