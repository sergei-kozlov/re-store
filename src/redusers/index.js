
const initialState = {
    books: [
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
    ]
};

const reduser = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOK_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

};

export default reduser;