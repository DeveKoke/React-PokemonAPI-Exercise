import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const PokemonId = () => {
  const [pokeData, setPokeData]=useState({});
  const [pokeDetails, setPokeDetails] = useState({})

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    useEffect(() => {
      if(id.length>0){
        const getPokeData = async () => {
          await axios.get(url).then((response) => {
            setPokeData(response.data);
          })
        }
        getPokeData();
      }
    }, [id]);
   
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
        setPokeDetails(pokemonInfo)
      }
    },[pokeData]) 

   console.log(pokeDetails.type); 

  return (
  <article className={`cardDetailsId electric`} >
      <div className={`card_title_content title${pokeDetails.type} fontsz_details`}>
          <h3>  {pokeDetails.name?.toUpperCase()} </h3>
          <p className="poke_id"># {pokeDetails.number}</p>
      </div>
      <img className="pokeImgDetail" src={pokeDetails.img} alt="pokemon" />
      <div className="card_info_content fontsz_details">
      <div className={`poke_type type${pokeDetails.type} `}>Type {pokeDetails.type} </div>
          <p>Height: {pokeDetails.height} </p>
          <p>Weight: {pokeDetails.weight} </p>
          <p>Ability: {pokeDetails.ability}</p>
          <p>Move: {pokeDetails.move} </p>
      </div>
  </article>
  );
};

export default PokemonId;
