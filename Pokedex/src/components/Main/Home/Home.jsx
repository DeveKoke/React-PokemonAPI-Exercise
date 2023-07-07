import React from "react";

const Home = () => {
  const portada = 'https://i.pinimg.com/736x/90/3c/e8/903ce82d065d12a760eeafe2aec9935a--cool-pokemon-wallpapers-pokemon-backgrounds.jpg'


  return <section className="portada_home">
    <h1 className="h1Home">ALL THE POKEMONS IN ONE PLACE</h1>
    <img src={portada} alt="pokemon portada" className="portada"/>
  </section>;
};

export default Home;
