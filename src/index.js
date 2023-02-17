import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import { addPost } from './redux/state';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={state.profilePage.posts} avatars={state.profilePage.avatars} dialogs={state.messagePage.dialogsData} messages={state.messagePage.messagesData} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);

