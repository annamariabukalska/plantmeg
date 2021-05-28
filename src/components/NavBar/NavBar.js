import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();

  const [searchText, setText] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/sok/${searchText}`);
  }

  return (
    <nav>
      <Link to="/">
        <img src="/images/plantmeg-logo.png" alt="søke" className="logo" />
      </Link>
      <ul className="menu">
        <Link to="/kategori">
          <li>Våre planter</li>
        </Link>
        <Link to="/nyheter">
          <li>Nyheter</li>
        </Link>
        <Link to="/tips">
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
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>
          <input 
            type="text" 
            placeholder="Søk" 
            className="search-box" 
            onChange={e => setText(e.target.value)}
            />
        </label>
      </form>
    </nav>
  );
}

export default NavBar;
