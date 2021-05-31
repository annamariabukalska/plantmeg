import "./ProductCard.css";
import { Link } from 'react-router-dom';
import { planter } from "../../planter";

function ProductCard(props) {

  const product = planter.find(item => item.id === props.id)

  return (
    <Link to={`/produkt/${product.id}`} style={{ color: 'inherit', textDecoration: "none" }}>
      <div className="productcard">
        <img className="product-picture" src={`/images/${product.imageUrl}`} alt={product.title} />
        <h2>{product.title}</h2>
        <p className="product-price">{product.price},-</p>
        <p className="product-subtitle">{product.shortDescription}</p>
      </div>
    </Link>
  );
}
export default ProductCard;
