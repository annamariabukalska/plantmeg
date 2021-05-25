import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard() {
  return (
    <main> 
        <Link className="product" to="/ProductPage">Strecilia</Link>
        <h1>Strelitzia</h1>
        <p>Høyde 75cm</p>
        <p>Lettstelt</p>
    </main>
  );
}

export default ProductCard;
