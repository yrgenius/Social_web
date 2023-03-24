const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
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
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 4,
                post: state.newPostText
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});