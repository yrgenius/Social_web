import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Navbar />
			<div className='wrapper'>
				<Routes>
					<Route
						element={
							<Profile
								store={props.store}
								posts={props.posts}
								avatars={props.avatars}
								newPostText={props.newPostText}
								dispatch={props.dispatch}
							/>
						}
						path='/profile'
					/>
					<Route
						element={
							<Dialogs
								store={props.store}
							/>
						}
						path='/dialogs/*' />
				</Routes>
			</div>
		</div>
	);
}

export default App;
