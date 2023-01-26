import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-header__img' src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-a-design_460848-8717.jpg?w=1380&t=st=1674735601~exp=1674736201~hmac=099df9ba6ab9acedf631627551935a6b0814f691876c90c4a257a9e20cd20010'/>
      </header>
      <div>
        <nav className='App-nav'>
          <ul className='App-nav__list'>
            <li><a href='#'>Messages</a></li>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Music</a></li>
            <li><a href='#'>Settings</a></li>
          </ul>
        </nav>
      </div>
      <main className='App-main'>
        <div className='App-main__wrapper'>
          <img className='App-main__img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJ52TEJj-IDrETYCf6d38-qupU4M2W9M8og&usqp=CAU'/>
          <div>
            ava + description
          </div>
          <div>
            My posts
            <div>New posts</div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
