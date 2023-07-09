import { useForm } from "react-hook-form";
import { useState } from "react";


const Form = ({savePokemon}) => {
  
  const {register, formState:{errors}, handleSubmit} = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const newPokemonData = (data) => {
    const { id, name, typeOne, height, weight, ability, move } = data;
  
    savePokemon({
      name: name,
      number: id,
      img: selectedImage,
      type: typeOne,
      height: height,
      weight: weight,
      ability: ability,
      move: move
      // typeTwo: typeTwo, // Si no usas typeTwo, puedes omitirlo o asignar un valor por defecto
    });
    console.log(data.img);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  
const numberPattern = /^(101[0-9]+|[2-9][0-9]{3,})$/;

  return (
  <article>
    <form onSubmit={handleSubmit(newPokemonData)} className="create-poke-form">
      <label><b>Step One:</b> Let's give your new POKEMON a new number. Remember that the number of existing POKEMONS is up to 1010, so the number of your POKEMON has to be higher.</label>
      <input type="text" placeholder="Number" {...register("id", {
        required:true, 
        pattern: numberPattern, 
        } )}/>
      {errors.id?.type === 'required' && <p className="requiredMessage">Don't forget to give your POKEMON an id!</p>}
      {errors.id?.type === 'pattern' && <p className="requiredMessage">The number must be up to 1010</p>}
      <label><b>Step Two:</b> Let's give it a cool name.</label>
      <input type="text" placeholder="Name your pokemon" maxLength={25}{...register("name", {
          required:true, 
          })}/>
      {errors.name?.type === 'required' && <p className="requiredMessage">you forgot to name your POKEMON!</p>}
      <label><b>Step Three:</b> What does your POKEMON look like?</label>
      <input type="file" placeholder="Image" accept="image/*" {...register("img", {
        required:true
        }) }   onChange={handleImageChange}/>
      {errors.img?.type === 'required' && <p className="requiredMessage">Ey, don't you have a pic of your POKEMON?</p>}
      {/* {selectedImage && <img src={selectedImage} alt="Selected Pokemon" />} */}

      <label><b>Step Four:</b> Think about the type your POKEMON is going to be. This can decide its strengths and weaknesses. Remember, the possible types are:</label>
      <select  {...register("typeOne", {required:true}) }>
        <option value="bug">BUG</option>
        <option value="electric">ELECTRIC</option>
        <option value="fire">FIRE</option>
        <option value="ghost">GHOST</option>
        <option value="grass">GRASS</option>
        <option value="ground">GROUND</option>
        <option value="ice">ICE</option>
        <option value="normal">NORMAL</option>
        <option value="poison">POISON</option>
        <option value="rock">ROCK</option>
        <option value="steel">STEEL</option>
        <option value="water">WATER</option>
      </select>
      {errors.typeOne?.type === 'required' && <p className="requiredMessage">Your POKEMON has to belong to a type</p>}
      <label><b>Step Five:</b> Let's give your POKEMON some characteristics like</label>
      <div className="newPoke_infoContainer">
        <div className="HWInfoContainer">
            <label> height:</label>
            <input type="number" min="1" max="100" {...register("height", {
              required:true
              }) } />
                    {errors.id?.type === 'required' && <p className="requiredMessage">Your POKEMON needs this characteristic!</p>}

            <label>Weight:</label>
            <input type="number" min="1" max="3000" {...register("weight", {
              required:true,
              }) } />
                    {errors.id?.type === 'required' && <p className="requiredMessage">Your POKEMON needs this characteristic!</p>}
        </div>

        <label>Ability:</label>
        <input type="text" maxLength={25}{...register("ability", {
          required:true,
          }) }  />
                {errors.id?.type === 'required' && <p className="requiredMessage">Your POKEMON needs an ability!</p>}

        <label>Move:</label>
        <input type="text" maxLength={25}{...register("move", {
          required:true,
          }) }  />
                {errors.id?.type === 'required' && <p className="requiredMessage">Your POKEMON needs a move!</p>}

      </div>

      <input type="submit" value="Create POKEMON" />
    </form>
  </article>
  );
};

export default Form;
