import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard() {
  return (
    <main> 
        <Link className="product" to="/ProductPage">Strecilia</Link>
        <ProductCard
            name="Kaktus1"
            imageUrl="plants.jpg"
            title="UtePlanter"
            price="150kr"
            height="75 cm"
            properties="Lettstelt"
        />
         <ProductCard
            name="Kaktus2"
            imageUrl="plants.jpg"
            title="UtePlanter"
            price="150kr"
            height="75 cm"
            properties="Lettstelt"
        />
         <ProductCard
            name="Kaktus3"
            imageUrl="plants.jpg"
            title="UtePlanter"
            price="150kr"
            height="75 cm"
            properties="Lettstelt"
        />
         <ProductCard
            name="Kaktus4"
            imageUrl="plants.jpg"
            title="UtePlanter"
            price="150kr"
            height="75 cm"
            properties="Lettstelt"
        />
    </main>
  );
}

export default ProductCard;
