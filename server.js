const express = require('express');
const app = express();
const PORT = require('./src/config/config');
const db = require('./src/database/db');
const products = require('./src/routes/products');

app.use(express.json());
app.use("/Movie/v1.0",products);

app.listen(PORT.app.PORT, () => {
    console.log(`Conntected on ${PORT.app.PORT}`)
})