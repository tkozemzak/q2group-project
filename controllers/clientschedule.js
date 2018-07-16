const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("clients").then((results)=>{
      res.render("clientschedule", {results: results[0]});

    })
  },
  login: function(req, res) {
      knex('clients').where('email', req.body.email).then((results) => {
        let user = results[0];
        if (user.password === req.body.password) {
          req.session.user = user;

          res.redirect(`/clientschedule/${user.id}`);
        } else {
          res.redirect("/");
        }
      })
    },




}
