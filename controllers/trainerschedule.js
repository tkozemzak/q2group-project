const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trainer").then((results)=>{
      knex("appts").join("clients", "appts.client_id", "clients.id").then((apptResults)=>{
        console.log(apptResults);
        res.render("trainerschedule", {results: results[0], appts: apptResults});
      })


    })
  },




}
