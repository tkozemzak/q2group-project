const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trainer").then((results)=>{
      knex("clients").then((clientResults)=>{
        res.render("trainerschedule", {results: results[0], clients: clientResults});
      })


    })
  },
  logout: function(req, res) {
    req.session.destroy();

      res.redirect('/')

  }



}
