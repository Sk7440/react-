import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
  return (
    <nav>
      <button>
        <h3>
          <CiMenuBurger />
        </h3>
      </button>
      <h3>My Food</h3>
      <h3>Mail</h3>
    </nav>
  );
}

export default Navbar;
