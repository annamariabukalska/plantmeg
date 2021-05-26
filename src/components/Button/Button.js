import { Link } from "react-router-dom";
import "./Button.css";

function Button(props) {
  return (
    <main>
      <Link className="button" to="/produkt">
        {props.title}
      </Link>
    </main>
  );
}
export default Button;
