import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import CartPage from './pages/CartPage';

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/CartPage" component={CartPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);