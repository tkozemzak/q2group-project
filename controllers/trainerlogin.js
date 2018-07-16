const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trainer").then((results)=>{
      res.render("trainerlogin", {results: results[0]});

    })
  },

  login: function(req, res) {
      knex('trainer').where('email', req.body.email).then((results) => {
        let user = results[0];
        if (user.password === req.body.password) {
          req.session.user = user;

          res.redirect("/trainerschedule");
        } else {
          res.redirect("/");
        }
      })
    },



}
