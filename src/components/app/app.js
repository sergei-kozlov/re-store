import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';
import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';

import './app.css';


const App = () => {


    return (
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
    );
};

export default withBookstoreService()(App);

