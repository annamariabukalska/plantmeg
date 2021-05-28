import React, { Component } from 'react';
import "./ProductPage.css";
import Button from '../../components/Button/Button';
import InfoBox from "../../components/InfoBox/InfoBox";
import { Link } from 'react-router-dom';

export default class ProductPage extends Component {

  state = {
    addedToCart: false
  }

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }
  
  addToCart() {
    this.setState(prevState => ({
      addedToCart: true
    }));
  }

  render() {
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
          title="Legg til handlekurv"
          onClick={this.addToCart}
        />
         {
            this.state.addedToCart && 
            <div className="added-to-cart">
              <p>Produkt lagt til</p>
              <Link to="/handlekurv">Se handlekurv</Link>
            </div>
          }
        </div>
        </div>
        <InfoBox />
      </div>
      
    );
  }
}
