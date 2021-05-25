import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';


ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cartpage" component={CartPage} />    
      <Route component={ErrorPage} />  
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);