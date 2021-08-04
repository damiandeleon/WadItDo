const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080
 
//use morgan to log HTTP request logger to show what routes we're hitting
app.use(morgan('tiny'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api', function (req, res) {
    const data = {
        name: "damian",
        age: 45
    }
    res.json(data)
})
 
app.listen(PORT, function() {
    console.log(`Server is starting at ${PORT}`);
})