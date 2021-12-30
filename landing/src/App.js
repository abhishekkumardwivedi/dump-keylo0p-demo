import logo from './anim.gif';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <p>
          Behind smart <code>Automotive</code> technology.
        </p>
        <a
          className="App-link"
          href="https://oerdev.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          OERDev
        </a>
      </header>
    </div>
  );
}

export default App;
