import { Link } from "react-router-dom";
import "./SecondaryButton.css";

function SecondaryButton(props) {
  return (
    <Link className="secondary-button" to={props.to}>
      {props.title}
    </Link>
  );
}
export default SecondaryButton;
