import { useState} from "react";


const NewCard = ({id, name, img, type, height, weight, ability, move}) => {
  
  
  const [showDetails, setShowDetails] = useState(false);

  // const filteredDetails = newPokemonList.filter(item => item.id === id);

  // const printDetails = () => newPokemonList.map(item => <Details type={item.type} height={item.height} weight={item.weight} ability={item.ability} move={item.move} key={uuidv4()}/>)

  const ToggleDetails = () => setShowDetails(!showDetails)

  return (
    <article className={`pokeCard ${type} `}>
        <div className="newPokCardTitleCont closeCard" onClick={ToggleDetails}>
          <div className={`card_title_content title${type}`}>
            <h3>{name}</h3>
            <p># {id}</p>
          </div>
          <img className="newPokeImg" src={img} alt="new pokemon picture" />
        </div>
        {showDetails &&   
        <div className="card_info_content">
          <div className={`poke_type type${type} `}>
            Type {type} 
          </div>
          <p>Height: {height} </p>
          <p>Weight: {weight} </p>
          <p>Ability: {ability}</p>
          <p>Move: {move} </p>
        </div>}
    </article>
    );
};

export default NewCard;
