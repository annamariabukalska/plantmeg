import React, { Component } from 'react';
import "./ProductPage.css";
import MainButton from '../../components/MainButton/MainButton';
import InfoBox from "../../components/InfoBox/InfoBox";
import { Link } from 'react-router-dom';
import { planter } from "../../planter";

export default class ProductPage extends Component {

  state = {
    addedToCart: false,
    id: "",
    title: "",
    imageUrl: "",
    price: 0,
    shortDescription: "",
    description: "",
    size: 0,
    latinName: ""
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

  componentDidMount() {
    const product = planter.find(item => item.id === this.props.match.params.id)

    this.setState(prevState => ({
      id: product.id,
      title: product.title,
      imageUrl: product.imageUrl,
      price: product.price,
      shortDescription: product.shortDescription,
      description: product.description,
      size: product.size,
      latinName: product.latinName,
    }));
  }

  render() {
    return (
      <div className="content-inset">
        <div className="product-section">
        <div>
        <img className="plante-img" src={`/images/${this.state.imageUrl}`} alt={this.state.title} />
        </div>
        <div>
        <h2>{this.state.latinName}</h2>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <p>Ø{this.state.size} cm</p>
        <p>{this.state.price} kr</p>
        <MainButton 
          title="Legg til handlekurv"
          onClick={this.addToCart}
        />
         {
            this.state.addedToCart && 
            <div className="added-to-cart">
              <p>{this.state.title} ble lagt til</p>
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
