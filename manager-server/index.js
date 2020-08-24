var express = require('express');
var router = express.Router();
var servers = require('./core/servers');
// var users = require('./core/users');
var usersRoutes = require('./core/models/user/userRouter');
var connections = require('./core/db/connection');
// var bodyParser = require('body-parser');


var app = express();

// var bodyParserJSON = bodyParser.json();
// var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

// Error handling
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
});
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
    res.send('hello world')
});
router.get('/servers', servers.ser);
// router.get('/users', users.ser);
// use express router
app.use('/api',router);
//call heros routing
usersRoutes(router);


app.use('/', router);

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
