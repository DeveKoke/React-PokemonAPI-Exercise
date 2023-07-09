import NewCard from "./NewCard/NewCard";
import { PokeContext } from "../../../../context/PokeContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const NewList = () => {

  const newPokemonList = useContext(PokeContext);


  const printNewPokemons = () => newPokemonList.map(item => <NewCard id={item.number} name={item.name} img={item.img} type={item.type} key={uuidv4()}/>)

  return printNewPokemons();
};

export default NewList;
