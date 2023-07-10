import ReactPlayer from "react-player"

const Home = () => {
  const portada = 'https://i.pinimg.com/736x/90/3c/e8/903ce82d065d12a760eeafe2aec9935a--cool-pokemon-wallpapers-pokemon-backgrounds.jpg'


  return <section className="portada_home">
    <h1 className="h1Home">ALL THE POKEMONS IN ONE PLACE</h1>
    <h2>Gotta catch 'em all!!</h2>
    <ReactPlayer  url="https://www.youtube.com/watch?v=rg6CiPI6h2g&ab_channel=kerwinpogi092" playing className="YTEmbeded"/>
    <img src={portada} alt="pokemon portada" className="portada"/>
  </section>;
};

export default Home;
