import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import ShopHeader from '../shop-header';
import './app.css';


const App = () => {


    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
         <Switch>
            <Route
            path="/"
            component={HomePage}
            exact/>

            <Route
                path="/cart"
                component={CartPage}
            />
        </Switch>
        </main>
    );
};

export default withBookstoreService()(App);

