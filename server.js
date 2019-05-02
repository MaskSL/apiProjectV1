const express = require('express');
const app = express();
const PORT = require('./lib/config/config');
const db = require('./lib/database/db');
const products = require('./lib/routes/products');

app.use(express.json());
app.use("/Movie/v1.0",products);

app.listen(PORT.app.PORT, () => {
    console.log(`Conntected on ${PORT.app.PORT}`)
})