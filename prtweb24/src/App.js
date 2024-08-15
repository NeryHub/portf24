import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import  About from './components/About.js';
import  Portfolio from './components/Portfolio.js';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <About />
       <Portfolio />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nery Nery Nery Nery versao 2
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
      <Footer />
    </div>
  );
}

export default App;
