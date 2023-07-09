import { useState } from "react";

const Search = ({updatePokeName}) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePokeName(e.target.pokename.value);
    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return( 
    // <div>
      <article className="findPokemon">
        <h1>POKEDEX</h1>
      <img src="./src/assets/pokedex.png" alt="pokedex" className="pokedexIcon" />
        <h2>Find a POKEMON</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="pokename" value={inputValue} onChange={handleChange}/>
          <input type="submit" value="Search Pokemon" />
        </form>
      </article>
    // </div>
  );
};

export default Search;
