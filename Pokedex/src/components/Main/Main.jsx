import {Routes, Route} from 'react-router-dom';

import Pokedex from './Pokedex/Pokedex';
import Home from './Home/Home';
import NewPokemon from './NewPokemon/NewPokemon';


const Main = ({savePokemon}) => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
      <Route path="/new" element={<NewPokemon savePokemon={savePokemon}/>}/>
    </Routes>
  </main>
  )
};

export default Main;
