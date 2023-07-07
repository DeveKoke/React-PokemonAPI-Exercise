import React from "react";
import Navbar from './Navbar/Navbar'

const Header = () => {
  const isHome = true;

  return (
  <header>
    {isHome && <img src="./src/assets/pokeball.png" alt="pokeball" className="pokeballImg" />}    
    <Navbar />
  </header>
  );
};

export default Header;
