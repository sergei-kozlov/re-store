import React from 'react';
import { withBookstoreService } from '../hoc';
import Spinner from '../spinner';

import './app.css';


const App = ({ bookstoreService }) => {
    return (
        <div><Spinner/></div>);
};

export default withBookstoreService()(App);

