import Details from "./Details/Details";
import { PokeContext } from "../../../../../context/PokeContext";
import { useContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';


const NewCard = ({id, name, img, type}) => {
  
  
  const newPokemonList = useContext(PokeContext);
  const [showDetails, setShowDetails] = useState(false)

  const printDetails = () => newPokemonList.map(item => <Details type={item.type} height={item.height} weight={item.weight} ability={item.ability} move={item.move} key={uuidv4()}/>)

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
        {showDetails && printDetails()}
    </article>
    );
};

export default NewCard;
