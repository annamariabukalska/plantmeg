import { Link } from 'react-router-dom';
import './ProduktCard.css';

function ProduktCard() {
  return (
    <nav>
        <Link to="/" className="nav-link">Oppskrifter</Link>
        <Link to="/">
          <img src="images/icon-teapot.png" alt="Oppskrift" className="logo"/>
        </Link>
        <Link to="/about" className="nav-link">Om ideen</Link>

        <img src={`images/${props.imageUrl}`} alt={props.title}/>

    </nav>
  );
}

export default ProduktCard;
