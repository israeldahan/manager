const mongoose = require('mongoose');

// mongoose.connect('mongodb://root:example@db:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
// let dbUrl = `mongodb://${env.process.MONGO_INITDB_ROOT_USERNAME}:${env.process.MONGO_INITDB_ROOT_PASSWORD}@db:27017/manager?authSource=admin`;
let dbUrl = `mongodb://root:pass@localhost:27017/manager?authSource=admin`;
mongoose.connect( dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .catch(err => {
    console.log(err)
  })
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
