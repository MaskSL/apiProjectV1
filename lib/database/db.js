const mongoose = require('mongoose');
const config = require('../config/config');
const parser = {useNewUrlParser: true}

const {db: {host, port, name}} = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
var connection = mongoose.connect(connectionString,parser)
.then(() => console.log(`connect to database`))
.catch((err) => {
    console.log(`something went wrong ${err}`)
})

module.exports = connection;