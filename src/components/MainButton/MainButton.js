import "./MainButton.css";

function MainButton(props) {
  return (
    <button className="main-button" onClick={props.onClick}>
        {props.title}
    </button>
  );
}
export default MainButton;
