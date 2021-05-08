import React from 'react';
import Appbar from './../components/Appbar';
import ItemListContainer from './ItemListContainer';
import Home from './HomePageContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProductPageContainer from './ProductPageContainer';
import ContactPageContainer from './ContactPageContainer';
import CartPageContainer from './CartPageContainer';

function AppRouter(){
    return (
      <BrowserRouter>
          <Appbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
              <ItemListContainer/>
            </Route>
            <Route exact path="/products">
              <ProductPageContainer/>
            </Route>
            <Route path="/products/:productsId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/contact">
              <ContactPageContainer/>
            </Route>
            <Route exact path="/cart">
                <CartPageContainer/>
            </Route>
          </Switch>
      </BrowserRouter>
    );
  }

export default AppRouter;