import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  { id: 1, post: 'Hi, how are you?' },
  { id: 2, post: 'It\'s my first post' },
  { id: 3, post: 'I can use props, its cool' },
];

let dialogsData = [
  { id: 1, name: 'Sveta' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Eva' },
  { id: 4, name: 'Evgen' },
  { id: 5, name: 'Ksusha' },
  { id: 6, name: 'Leo' },
  { id: 7, name: 'Donny' },
  { id: 8, name: 'Mike' },
  { id: 9, name: 'Raphael' },
];

let messagesData = [
  { id: 1, name: 'Hello?' },
  { id: 2, name: 'Whats up' },
  { id: 3, name: 'It impossible' },
  { id: 4, name: 'Yes' },
  { id: 5, name: 'New user join on web' },
  { id: 6, name: 'Hi all' },
  { id: 7, name: 'Hi' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

