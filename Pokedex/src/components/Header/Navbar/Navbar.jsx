
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
  <nav className="navbar">
    <ul className="ul_navbar">
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/pokedex">Pokedex</Link>
      <Link className='link' to="/new">Poke-Workshop</Link>
    </ul>
</nav>
  );
};

export default Navbar;
