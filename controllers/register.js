const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("clients").then((results)=>{
      res.render("register", {results: results[0]});

    })
  },

  create: function(req, res) {
    knex("clients").insert({
      name: req.body.name,
      age: req.body.age,
      level: req.body.level,
      email: req.body.email,
      password: req.body.password
    }).then(()=>{
      res.redirect('/clientlogin')
    })
  }



}
