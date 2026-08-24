import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
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
