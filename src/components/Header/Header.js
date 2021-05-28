import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h3>{props.title}</h3>
     <Link className="header-vis-mer" to="/produkt">Vis mer</Link>
    </div>
  );
}
export default Header;
