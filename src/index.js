import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    posts={state.profilePage.posts}
                    avatars={state.profilePage.avatars}
                    newPostText={state.profilePage.newPostText}
                    dialogs={state.messagePage.dialogsData}
                    messages={state.messagePage.messagesData}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

