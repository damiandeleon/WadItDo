const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080
 
//use morgan to log HTTP request logger to show what routes we're hitting
app.use(morgan('tiny'));

app.use(experss.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/wadItDo", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));


 
app.listen(PORT, function() {
    console.log(`Server is starting at ${PORT}`);
})