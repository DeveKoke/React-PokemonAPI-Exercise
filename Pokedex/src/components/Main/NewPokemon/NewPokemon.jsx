import Form from './Form/Form';
import NewList from './NewList/NewList';



const NewPokemon = ({savePokemon}) => {

  return (
  <section className='create-poke'>
    <h1>POKE-WORKSHOP</h1>
    <h2>Create your own POKEMON</h2>
    <h3>Who hasn't ever dreamed of creating their own POKEMON?</h3>
    <img className='PW-img' src="../src/assets/ash.png" alt="ash" />
    <Form savePokemon={savePokemon} />
    <section>
        <NewList />
    </section>
  </section>
  );
};

export default NewPokemon;
