import Details from "./Details/Details";
// const [showDetails, setShowDetails] = useState(false)


const NewCard = ({id, name, img, type}) => {



  return (
    <article className={`pokeCard ${type} closeCard`}>
        <div className="newPokCardTitleCont">
          <div className={`card_title_content title${type}`}>
            <h3>{name}</h3>
            <p># {id}</p>
          </div>
          <img className="newPokeImg" src={img} alt="new pokemon picture" />
        </div>
        {/* {showDetails && <Details />} */}
    </article>
    );
};

export default NewCard;
