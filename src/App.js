import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; 
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './assets/main.scss';

function App() {
  return (
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
          <Route  path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;