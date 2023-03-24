const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?' },
                { id: 2, post: 'It\'s my first post' },
                { id: 3, post: 'I can use props, its cool' },
            ],
            avatars: [
                { id: 1, avatar: './src/images/avatars/man.png' },
                { id: 2, avatar: './src/images/avatars/woman.png' },
                { id: 3, avatar: './src/images/avatars/boy.png' },
                { id: 4, avatar: './src/images/avatars/girl.png' },
                { id: 5, avatar: './src/images/avatars/afro.png' },
            ],
            newPostText: 'enter you post',
        },

        messagePage: {
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
        },

    },

    _callSubscriber() {
        console.log('state changes');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody;
            this._state.messagePage.newMessageBody = '';
            this._state.messagePage.messagesData.push({ id: 8, name: body });
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default store;
window.store = store;