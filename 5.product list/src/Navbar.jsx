import { CiShoppingCart } from "react-icons/ci";

function Navbar(countS) {
  return (
    <>
      <nav className="main-navbar">
        <h1>This is Navbar</h1>
        <div className="cart">

        <CiShoppingCart  />
        <div class="pop">
          {countS}</div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
