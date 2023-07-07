import PokeCard from './PokeCard'
import { v4 as uuidv4 } from 'uuid';


const PokemonList = ({pokeList}) => {

  const printPokemon = () => pokeList.map(item => <PokeCard name={item.name} number={item.number} img={item.img} type={item.type} height={item.height} weight={item.weight} move={item.move} ability={item.ability} key={uuidv4()} />)

  return (
    <section className="pokemonList">
      {printPokemon()}
    </section>
  );
};

export default PokemonList;
