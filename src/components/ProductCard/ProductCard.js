import './ProductCard.css';
// import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div className="productcard">
      <img className="product-picture" src="./images/alove-vera.jpg" alt=""/>
      <h2>{props.title}</h2>
      <p className="product-price" >{props.price},-</p>
      <p className="product-subtitle">{props.subtitle1}</p>
      <p className="product-subtitle">{props.subtitle2}</p>

    </div>
  );
}
export default ProductCard;