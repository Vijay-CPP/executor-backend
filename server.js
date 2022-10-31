const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const axios = require("axios");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    { message: "Hola! Welcome to the Executor-Backend" };
    res.send(hola);
});

app.post('/', (req, res) => {

    let obj =
    {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        stdin: req.body.stdin,
        script: req.body.script,
        language: req.body.language,
        versionIndex: req.body.versionIndex
    }

    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    };

    axios({
        method: 'post',
        url: 'https://api.jdoodle.com/v1/execute/',
        data: obj
    }).then(resp => {
        hola = resp.data;
        console.log(hola)
        res.json(hola)
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port `, PORT);
});