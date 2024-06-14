import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/mainPage';
import { HeadMain } from './components/header';

function App() {
  return (
    <div className="App">
      <HeadMain/>
      <header className="App-header">
        <MainPage/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
