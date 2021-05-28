import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img src="/images/plantmeg-logo.png" alt="søke" className="logo" />
      </Link>
      <ul className="menu">
        <Link to="/">
          <li>Våre planter</li>
        </Link>
        <Link to="/">
          <li>Nyheter</li>
        </Link>
        <Link to="/">
          <li>Tips og råd</li>
        </Link>
        
        <Link to="/handlekurv">
          <img
            src="/images/shopping-cart.png"
            alt="shoping-cart"
            className="icons"
          />
       </Link>
       </ul>
      <form>
        <label>
          <input type="text" placeholder="Søk" className="search-box"></input>
        </label>
      </form>
    </nav>
  );
}

export default NavBar;
