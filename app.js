const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes');

const app = express();


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// to get access to the server from any domain like postman.
// app.use('/feed', feedRoutes);
// //declaration of the routes.

app.listen(process.env.PORT || 8080, 
    () => console.log("Server is running..."));

// app.listen(8080);