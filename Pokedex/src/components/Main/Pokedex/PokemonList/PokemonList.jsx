import PokeCard from './PokeCard';
import { v4 as uuidv4 } from 'uuid';


const PokemonList = ({pokeList}) => {

  const printPokemon = () => pokeList.map(item => <PokeCard name={item.name} number={item.number} img={item.img} type={item.type}  key={uuidv4()} />)

  return (
    <section className="pokemonList">
      {printPokemon()}
    </section>
  );
};

export default PokemonList;
