import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className='wrapper'>
        <Routes>
          <Route element={<Profile posts={props.posts} />} path='/profile' />
          <Route element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} path='/dialogs/*' />
        </Routes>
      </div>
    </div>
  );
}

export default App;
