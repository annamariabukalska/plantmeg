import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

function Breadcrumbs(props) {
  return (
    <main>
      <Link className="vis-mer" to="/produkt">
        {props.title}
      </Link>
    </main>
  );
}
export default Breadcrumbs;
