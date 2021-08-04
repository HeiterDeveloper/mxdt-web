import React, { Component } from 'react';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Home from './view/Home';

import { default as CadProfissional } from './view/Profissional/Cadastro';
import { default as ListProfissional } from './view/Profissional/Listagem';

import { default as CadTipoDeProfissional } from './view/TipoDeProfissional/Cadastro';
import { default as ListTipoDeProfissional } from './view/TipoDeProfissional/Listagem';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>

          <Route path="/listagem/tipoDeProfissional">
              <ListTipoDeProfissional />
            </Route>

            <Route path="/cadastro/tipoDeProfissional">
              <CadTipoDeProfissional />
            </Route>

            <Route path="/listagem/profissional">
              <ListProfissional />
            </Route>

            <Route path="/cadastro/profissional">
              <CadProfissional />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
