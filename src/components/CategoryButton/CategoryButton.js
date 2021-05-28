import { Link } from "react-router-dom";
import "./CategoryButton.css";

function CategoryButton(props) {
  return (
    <Link className="product" to="/kategori">
      {props.title}
    </Link>
  );
}
export default CategoryButton;
