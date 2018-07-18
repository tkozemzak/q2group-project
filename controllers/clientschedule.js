const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("clients").then((results)=>{
      knex("classes").then((classResults)=>{
      res.render("clientschedule", {results: results[0], classes: classResults});
})
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
//
signup: function(req, res) {

  knex('classes').where('id', req.params.id).then((results)=>{
    knex('appts').insert({
      class_id: results[0].id,
      client_id: req.session.user.id


    })
  }).then(()=>{
    res.redirect(`/clientschedule/${req.session.user.id}`);
  })


},


    logout: function(req, res) {
      req.session.destroy();

        res.redirect('/')

    }




}
