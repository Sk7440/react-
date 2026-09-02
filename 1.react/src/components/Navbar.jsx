import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { homeContext } from "./ContextApi";
function Navbar() {
  const {setCount} = useContext(homeContext)
  return (
    <nav>

      <button onClick={()=> setCount((prev)=> prev  + 1)}>
        increemnt
      </button>
      <button>
        <h3>
          <CiMenuBurger />
        </h3>
      </button>

      <ul>
        <Link to={"/"}>
          <li>home</li>
        </Link>

        <Link to={'/about'}>
          <li>about</li>
        </Link>

        <Link to={'/footer'}>
          <li>footer</li>
        </Link>
      </ul>
      <h3>My Food</h3>
      <h3>Mail</h3>
    </nav>
  );
}

export default Navbar;
