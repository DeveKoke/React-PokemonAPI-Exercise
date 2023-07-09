import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

import { PokeContext } from './context/PokeContext'
import {useState, useEffect} from 'react'; 


import './App.css';

function App() {

  const [newPokemon, setNewPokemon] = useState({});
  const [newPokemonList, setnewPokemonList] = useState([]);

  const savePokemon = PokemonForm => {
    setNewPokemon(PokemonForm)
  }
  // console.log(newPokemon);
  

  useEffect(() =>{
    if(Object.keys(newPokemon).length){
      setnewPokemonList([...newPokemonList, newPokemon])
    }

  },[newPokemon])


  return (
    <>
    <BrowserRouter>
      <Header />
    <PokeContext.Provider value={newPokemonList}>
      <Main savePokemon={savePokemon} />
    </PokeContext.Provider>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
