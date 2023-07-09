import React from "react";

const Details = ({ type, height, weight, ability, move}) => {
  return(
  <div className="card_info_content">
    <div className={`poke_type type${type} `}>
      Type {type} 
    </div>
    <p>Height: {height} </p>
    <p>Weight: {weight} </p>
    <p>Ability: {ability}</p>
    <p>Move: {move} </p>
  </div>

  );
};

export default Details;
