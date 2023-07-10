import {Link} from "react-router-dom";

const PokeCard = ({name, number, img, type}) => {


  return (
  <article className={`pokeCard ${type}`}>
      <div className={`card_title_content title${type}`}>
          <h3> <Link className='link' to={`/pokemon/${number}`}> {name.toUpperCase()}</Link> </h3>
          <p className="poke_id"># {number}</p>
      </div>
      <img className="pokeImg" src={img} alt="pokemon" />
      {/* <div className="card_info_content">
          <div className={`poke_type type${type} `}>Type {type} </div>
          <p>Height: {height} </p>
          <p>Weight: {weight} </p>
          <p>Ability: {ability}</p>
          <p>Move: {move} </p>
      </div> */}
  </article>
  );
};

export default PokeCard;
