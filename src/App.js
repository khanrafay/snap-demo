import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">React Bookstore</h1>
      <div className="bookstore">
        <div className="books">
          <img src="https://picsum.photos/200/300" className="booklogo" alt="Book" />
          <h1>BOOK TITLE 1</h1>
          <p><b>AUTHOR:</b> AUTHOR 1 </p>
        </div>
        <div className="books">
          <img src="https://picsum.photos/200/300" className="booklogo" alt="Book" />
          <h1>BOOK TITLE 2</h1>
          <p><b>AUTHOR:</b> AUTHOR 2 </p>
        </div>
        <div className="books">
          <img src="https://picsum.photos/200/300" className="booklogo" alt="Book" />
          <h1>BOOK TITLE 3</h1>
          <p><b>AUTHOR:</b> AUTHOR 3 </p>
        </div>
      </div>
    </div>
  );
}

export default App;
