


const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';
const SELECT_ALL_PROJECTDB_QUERY = 'SELECT * FROM projectdb';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dark0000',
    database: 'react_sql'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});


app.use(cors());

app.get('/', (req, res) => {
    res.send('go to /products to see products');
})

app.get('/products/add', (req, res) => {
    const { name, price } = req.query;
    const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name, price) VALUES ('${name}', '${price}')`;
    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added product')
        }
    })
    
})

app.get('/projectdb', (req, res) => {
    connection.query(SELECT_ALL_PROJECTDB_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.get('/projectdd', (req, res) => {
    connection.query(SELECT_ALL_PROJECTDB_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});


app.listen(4000, () => {
    console.log(`products server listening on port 4000`);
})

