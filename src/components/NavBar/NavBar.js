import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src="images/plantmeg-logo.png" alt="søke" className="logo" />
      </Link>
      <form>
        <label>
          <input type="text" placeholder="Søk" className="search-box"></input>
        </label>
      </form>
      <div>
      <Link to="/handlekurv">
        <img
          src="images/shopping-cart.png"
          alt="shoping-cart"
          className="icons"
        />
      </Link>
      <Link to="/">
        <img src="images/heart.png" alt="wish" className="icons" />
      </Link>
      </div>
    </nav>
  );
}

export default NavBar;
