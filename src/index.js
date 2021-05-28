import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CartPage from "./pages/CartPage/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import SearchPage from "./pages/SearchPage/SearchPage";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/handlekurv" component={CartPage} />
      <Route path="/kategori" component={CategoryPage} />
      <Route path="/nyheter" component={NewsPage} />
      <Route path="/tips" component={ArticlePage} />
      <Route path="/produkt/:id" component={ProductPage} />
      <Route path="/sok/:id" component={SearchPage} />
      <Route component={ErrorPage} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
