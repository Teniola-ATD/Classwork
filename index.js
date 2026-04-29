//import express
const express = require('express');
//import cors
const cors = require('cors');

//create express app
const app = express();
const port = 7777;
app.use(cors());
app.use(express.json());


app.length('/', (req, res) => {
    res.send('Api is ready for use');
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}