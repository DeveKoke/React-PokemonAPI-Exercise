import { useState, useEffect } from 'react';

import Search from './Search/Search';
import PokemonList from './PokemonList/PokemonList';

import axios from 'axios';


function Pokedex() {
  const [pokeName, setPokeName]=useState('');
  const [pokeData, setPokeData]=useState({});
  const [pokeList, setPokeList]=useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  useEffect(() => {
    if(pokeName.length>0){
      const getPokeData = async () => {
        await axios.get(url).then((response) => {
          setPokeData(response.data);
        })
        .catch((error) => {
          if ( error.response.status === 404) {
            setErrorMessage(`Couldn't find any pokemon named "${pokeName}". Please, type a correct name`);
            setTimeout(() => {
              setErrorMessage('');
            }, 4000); 
          }
        });
      }
      getPokeData();
    }
  }, [pokeName]);
  // error.response &&

  useEffect(() =>{
    if(Object.keys(pokeData).length){
      const pokemonInfo = {
        name: pokeData.name, 
        number: pokeData.id, 
        img: pokeData.sprites.other.home.front_default,
        type: pokeData.types[0].type.name,
        height: pokeData.height, 
        weight: pokeData.weight,
        ability: pokeData.abilities[0].ability.name,
        move: pokeData.moves[0].move.name
      }
      setPokeList([...pokeList, pokemonInfo])

    }

  },[pokeData])


  const updatePokeName = (pokemon) => {
  setPokeName(pokemon)
  }

  return(
    <section className='pokedex'>
      <Search updatePokeName={updatePokeName} />
      {errorMessage && <p className='error_search'>{errorMessage}</p>}
    
      <PokemonList pokeList={pokeList} />
    </section>
  )
};

export default Pokedex;
