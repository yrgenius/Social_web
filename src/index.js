import React from 'react';
import ReactDOM from 'react-dom/client';
import state from './redux/state';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={state.profilePage.posts} dialogs={state.messagePage.dialogsData} messages={state.messagePage.messagesData} />
  </React.StrictMode>
);

