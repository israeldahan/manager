var express = require('express');
var router = express.Router();
var servers = require('./core/servers');
var servers = require('./core/users');
var connections = require('./core/db/connection');

var app = express();

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
    res.send('hello world')
});

    router.get('/servers', servers.ser);
router.get('/users', servers.ser);

app.use('/', router);

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
