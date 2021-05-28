import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// páginas
import Main from '../pages/Inicio/main';
import ListaLocais from '../pages/ListaLocais'
import DetalheLocal from '../pages/DeltalheLocal'

import Headers from '../components/headers'
import Footer from '../components/footer'
import NotFound from '../components/NotFound'

import GlobalStyle from '../globals/styles'

import 'font-awesome/css/font-awesome.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle/>
      <Headers />

      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/locais" component={ListaLocais} />
        <Route exact path="/detalhe" component={DetalheLocal} />

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default Routes;
