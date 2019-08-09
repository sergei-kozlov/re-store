import React from 'react';
import {BooksroreServiceConsumer} from '../book-service-context';

const withBookstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <BooksroreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props}
                                         bookstoreService={bookstoreService}/>);
                    }
                }
            </BooksroreServiceConsumer>
        );
    }
};

export default withBookstoreService;