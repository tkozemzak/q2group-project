const homepage = require("../controllers/homepage.js")
module.exports = function(app){












app.use(authenticateUser)




}



function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}
