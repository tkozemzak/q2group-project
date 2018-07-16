const homepage = require("../controllers/homepage.js");
const trainerlogin = require("../controllers/trainerlogin.js");
const register = require("../controllers/register.js");
const clientschedule = require("../controllers/clientschedule.js");
module.exports = function(app){


app.get('/', homepage.index);


app.get('/trainerlogin', trainerlogin.index);

//registration
app.get('/register', register.index);
app.post('/register', register.create)


app.use(authenticateUser);

app.get('/clientlogin', clientschedule.index)

}



function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}
