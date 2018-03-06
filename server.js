const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname,'dist')));

app.use('/api',apiRoutes);

app.listen(port,()=>{
    console.log(`Server is up and running on port : ${port}`)
})