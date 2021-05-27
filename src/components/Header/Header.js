import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <main>
      <Link className="vis-mer" to="/produkt">
        {props.title}
      </Link>
    </main>
  );
}
export default Header;
