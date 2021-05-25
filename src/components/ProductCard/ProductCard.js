import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard() {
  return (
    <main> 
        <Link className="produkt" to="/ProductPage">Strecilia</Link>
        <h1>Strelitzia</h1>
        <p>Høyde 75cm</p>
        <p>Lettstelt</p>
        <img src="images/plantmeg-logo.png" alt="søke" className="logo"/>
    </main>
  );
}

export default ProductCard;
