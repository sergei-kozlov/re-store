import React from 'react';

const {
    Provider: BookstoreServiceProvider,
    Consumer: BooksroreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BooksroreServiceConsumer
};