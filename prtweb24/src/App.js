import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Hero-Section">
        <div className="Avatar">avatar
        </div>
        <div className="Title">titulo welcom

        </div>
      </div>
      <div className="About-Section">
        <h1 class="title">Título Centralizado</h1>
        <div className='fotoDescr'>
          <div className='image'></div>
          <div className='descr'>
            <h2>background</h2>
            <p>descricao</p>
          </div>


        </div>
      </div>
      <div className="About-Section">
        <h1 class="title">Work exp</h1>
        <div className='fotoDescr'>
          
          <div className='descr'>
            <h2>background</h2>
            <p>descricao</p>
          </div>
          <div className='image'></div>


          <div className='image'></div>
          <div className='descr'>
            <h2>background</h2>
            <p>descricao</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
