import RickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Character from './components/Character';

function App() {

  const [characteres, setcharacters] = useState(null)

  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setcharacters(characterApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characteres ? (
        <Character characteres={characteres} setcharacters = {setcharacters}/>
        ) : (
          <>
            <img src={RickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}


      </header>
    </div>
  );
}

export default App;
