
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

app.get('/projectdb/add', (req, res) => {
    const { background, cardtitle, cardtext } = req.query;
    connection.query(`INSERT INTO projectdb (background, cardtitle, cardtext) VALUES ('${background}', '${cardtitle}', '${cardtext}')`, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added pr')
        }
    })
    
})

app.get('/gamedb/add', (req, res) => {
    const { background, cardtitle, cardtext } = req.query;
    connection.query(`INSERT INTO gamedb (background, cardtitle, cardtext) VALUES ('${background}', '${cardtitle}', '${cardtext}')`, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added game')
        }
    })
    
})

app.get('/picturedb/add', (req, res) => {
    const { background, cardtitle, cardtext } = req.query;
    connection.query(`INSERT INTO picturedb (background, cardtitle, cardtext) VALUES ('${background}', '${cardtitle}', '${cardtext}')`, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added picture')
        }
    })
    
})

app.get('/noveldb/add', (req, res) => {
    const { background, cardtitle, cardtext } = req.query;
    connection.query(`INSERT INTO noveldb (background, cardtitle, cardtext) VALUES ('${background}', '${cardtitle}', '${cardtext}')`, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added novel')
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



app.get('/gamedb', (req, res) => {
    connection.query(`select * from gamedb`, (err, results) => {
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

app.get('/picturedb', (req, res) => {
    connection.query(`select * from picturedb`, (err, results) => {
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

app.get('/noveldb', (req, res) => {
    connection.query(`select * from noveldb`, (err, results) => {
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




