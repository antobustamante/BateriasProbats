import React from 'react';
import Appbar from './components/Appbar';
import ItemListContainer from './containers/ItemListContainer';
import Home from './containers/HomePageContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
        <Appbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
            <ItemListContainer/>
          </Route>
          <Route exact path="/products">
            <ItemListContainer/>
          </Route>
          <Route path="/products/:productsId">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    // <div>
    //   <header>
    //     <Appbar/>
    //   </header>
    //   <section>
    //     <article>
    //       <Home/>
    //     </article>
    //     <ItemListContainer/>
    //   </section>
    // </div>
  );
}



export default App;

/* <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/products/:id">
            <Products/>
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
      </Router> */
