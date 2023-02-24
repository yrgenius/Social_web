let renderEntireTree = () => {
    console.log('state changes');
}

let state = {
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
    },

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        post: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;