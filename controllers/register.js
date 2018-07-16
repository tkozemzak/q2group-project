const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("clients").then((results)=>{
      res.render("register", {results: results[0]});

    })
  },



}
