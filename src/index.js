import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={state.profilePage.posts} avatars={state.profilePage.avatars} dialogs={state.messagePage.dialogsData} messages={state.messagePage.messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);

