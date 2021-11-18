import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; 
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext'
import { UIProvider } from './context/UIContext';
import { Checkout } from './components/Checkout/Checkout'

import './assets/main.scss';


function App() {

  
  return (
    <>
    <UIProvider>
      <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer/>
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer/>
              </Route>
              <Route exact path="/item/:itemId">
                <ItemDetailContainer/>
              </Route>
              <Route exact path="/cart">
                <CartContainer />
              </Route>
              <Route exact path="/checkout">
                <Checkout/>
              </Route>
              <Route  path="*">
                <Redirect to="/"/>
              </Route>              
            </Switch>
        </BrowserRouter>
      </CartProvider>
    </UIProvider>
    </>
  );
}

export default App;