import {Routes, Route} from 'react-router-dom';

import Pokedex from './Pokedex/Pokedex';
import Home from './Home/Home'


const Main = () => {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pokedex" element={<Pokedex/>}/>
    </Routes>
  </main>
  )
};

export default Main;
