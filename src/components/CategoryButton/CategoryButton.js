import { Link } from "react-router-dom";
import "./CategoryButton.css";

function CategoryButton(props) {
  return (
    <main>
      <Link className="product" to="/produkt">
        {props.title}
      </Link>
    </main>
  );
}
export default CategoryButton;
