const homepage = require("../controllers/homepage.js");
const trainerlogin = require("../controllers/trainerlogin.js");
const register = require("../controllers/register.js");
module.exports = function(app){


app.get('/', homepage.index);


app.get('/trainerlogin', trainerlogin.index);


app.get('/register', register.index);









app.use(authenticateUser)




}



function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}
