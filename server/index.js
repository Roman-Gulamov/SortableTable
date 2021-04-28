const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'paints',
    multipleStatements: true
});

app.use(cors());


app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM `products`";

    db.query(sqlSelect, (error, result) => {
        res.send(result);
    });
});


app.get('/api/sort-name', (req, res) => {
    const sqlOrder = "SELECT * FROM `products` ORDER BY productsName ASC";

    db.query(sqlOrder, (error, result) => {
        res.send(result);
    });
});


app.get('/api/sort-number', (req, res) => {
    const sqlOrder = "SELECT * FROM `products` ORDER BY productsNumber DESC";

    db.query(sqlOrder, (error, result) => {
        res.send(result);
    });
});


app.get('/api/sort-distance', (req, res) => {
    const sqlOrder = "SELECT * FROM `products` ORDER BY productsDistance DESC";

    db.query(sqlOrder, (error, result) => {
        res.send(result);
    });
});


app.listen(3001);