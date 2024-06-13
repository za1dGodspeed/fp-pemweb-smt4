const express = require('express');
const bodyParser = require('body-parser');
const items = require('./routes/items');
const cors = require('cors');

// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/berita', items);

// app.use(cors(corsOptions)) // Use this after the variable declaration

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
