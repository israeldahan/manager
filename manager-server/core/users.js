var User = require('./models/user/userSchema');

// const user = new User ({
//   name:  "israel dahan", // String is shorthand for {type: String}
//   email: "id@studiodvd.co.il",
//   call:   "052-8287520"
// });
//
// user.save().then((err) => {
//   console.log('new user');
//   // if (err) return handleError(err);
// // saved!
// });
exports.ser = function(req, res) {
  User.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};
