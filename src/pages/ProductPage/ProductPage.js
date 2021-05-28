import "./ProductPage.css";
import Button from '../../components/Button/Button';


function ProductPage() {
  return (
    <div className="content-inset">
      <div className="product-section">
      <div>
      <img className="plante-img" src={"images/plante-fiolinfiken.jpg"} alt="plants" />
      </div>
      <div>
      <h2>Ficus Lyrata</h2>
      <h1>Fiolinfiken</h1>
      <p>Fiolinfiken er en populær potteplante med lange, tynne harde blader. Den presenterer seg veldig elegant i rommet med store blader. Planten egner seg for folk som har travle dager. </p>
      <p>Ø19 cm</p>
      <p>299 kr</p>
      <Button 
      title="Legg til handlekurv"/>
      </div>
      </div>
    </div>
  );
}

export default ProductPage;
