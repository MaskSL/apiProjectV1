require('dotenv').config(); 

const config = {
    app: {
        PORT: 4000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'shoppingCartDB'
    }
};

module.exports = config;