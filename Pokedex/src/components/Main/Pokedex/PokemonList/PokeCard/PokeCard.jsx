

const PokeCard = ({name, number, img, type, height, weight, move, ability}) => {


  return (
  <article className={`pokeCard ${type}`}>
      <div className={`card_title_content title${type}`}>
          <h3> {name.toUpperCase()} </h3>
          <p className="poke_id"># {number}</p>
      </div>
      <img className="pokeImg" src={img} alt="pokemon" />
      <div className="card_info_content">
          <div className={`poke_type type${type} `}>Type {type} </div>
          <p>Height: {height} </p>
          <p>Weight: {weight} </p>
          <p>Ability: {ability}</p>
          <p>Move: {move} </p>
      </div>
  </article>
  );
};

export default PokeCard;
