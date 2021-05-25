import { Link } from 'react-router-dom';
import './MainCategory.css';

function MainCategory(props) {
  return (
    <main> 
      <Link className="product" to="/produkt">
        {props.title}
      </Link>
    </main>
  );
}
export default MainCategory;



