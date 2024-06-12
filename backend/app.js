const express = require('express');
const bodyParser = require('body-parser');
const items = require('./routes/items');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/berita', items);

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
