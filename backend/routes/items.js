const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Buat koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'uts'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Tambah Item
router.post('/add', (req, res) => {
    const newItem = {
        name: req.body.name,
        quantity: req.body.quantity
    };
    const sql = 'INSERT INTO berita SET ?';
    db.query(sql, newItem, (err, result) => {
        if (err) throw err;
        res.send('Item added...');
    });
});

// Dapatkan Semua Item
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM berita';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update Item
router.put('/update/:id', (req, res) => {
    const updatedItem = {
        name: req.body.name,
        quantity: req.body.quantity
    };
    const sql = `UPDATE berita SET ? WHERE id_berita = ${req.params.id}`;
    db.query(sql, updatedItem, (err, result) => {
        if (err) throw err;
        res.send('Item updated...');
    });
});

// Hapus Item
router.delete('/delete/:id', (req, res) => {
    const sql = `DELETE FROM berita WHERE id_berita = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Item deleted...');
    });
});

module.exports = router;
