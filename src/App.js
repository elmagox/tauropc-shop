import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'; 
import { ItemDetail } from './components/ItemListContainer/ItemDetail/ItemDetail'; 
import './assets/main.scss';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <h1>category</h1>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetail/>
          </Route>
          <Route  path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;