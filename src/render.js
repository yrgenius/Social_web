import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText } from './redux/state';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App posts={state.profilePage.posts}
					avatars={state.profilePage.avatars}
					newPostText={state.profilePage.newPostText}
					dialogs={state.messagePage.dialogsData}
					messages={state.messagePage.messagesData}
					addPost={addPost}
					updateNewPostText={updateNewPostText}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}



