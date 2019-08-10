import React from 'react';
import BookList from '../../book-list/book-list';

import './home-page.css'

const homePage = () => {

    const books = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J.Fowler'
        },

        {
            id: 2,
            title: 'Releale It!',
            author: 'Michael T. Nygard'
        }
    ];

    return(
   <BookList books={books}/>
    )
};

export default homePage;
