var Users = require('./userModel');

exports.createUser = function (req, res, next) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };

  Users.create(user, function(err, user) {
    if(err) {
      res.json({
        error : err
      })
    }
    res.json({
      message : "User created successfully"
    })
  })
}

exports.getUsers = function(req, res, next) {
  Users.get({}, function(err, users) {
    if(err) {
      res.json({
        error: err
      })
    }
    res.json({
      users: users
    })
  })
}

exports.getUser = function(req, res, next) {
  Users.getByName({name: req.params.name}, function(err, users) {
    if(err) {
      res.json({
        error: err
      })
    }
    res.json({
      users: users
    })
  })
}

exports.updateUser = function(req, res, next) {
  var user = {
    name: req.body.name,
    email: req.body.email
  }
  Users.update({_id: req.params.id}, user, function(err, user) {
    if(err) {
      res.json({
        error : err
      })
    }
    res.json({
      message : "User updated successfully"
    })
  })
}

exports.removeUser = function(req, res, next) {
  Users.delete({_id: req.params.id}, function(err, hero) {
    if(err) {
      res.json({
        error : err
      })
    }
    res.json({
      message : "User deleted successfully"
    })
  })
}
