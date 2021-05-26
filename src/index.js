import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/handlekurv" component={CartPage} />
      <Route path="/produkt" component={ProductPage} />
      <Route path="/kategori" component={CategoryPage} />
      <Route component={ErrorPage} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
