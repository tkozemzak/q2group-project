const homepage = require("../controllers/homepage.js");
const trainerlogin = require("../controllers/trainerlogin.js");
const register = require("../controllers/register.js");
const clientschedule = require("../controllers/clientschedule.js");
const trainerschedule = require("../controllers/trainerschedule.js");

module.exports = function(app){


app.get('/', homepage.index);


app.get('/trainerlogin', trainerlogin.index);

//registration
app.get('/register', register.index);
app.post('/register', register.create)


//trainerlogin
app.post('/trainerlogin', trainerlogin.login);
app.get('/trainerschedule', trainerschedule.index);


//clientpage
app.get('/clientschedule/:id', clientschedule.index);
app.post('/clientlogin', clientschedule.login);
app.get('/logout', clientschedule.logout);
app.post('/signup/:id', clientschedule.signup)




}


// app.use(authenticateUser);
//
// function authenticateUser(req, res, next){
//   if(!req.session.user){
//     res.redirect('/');
//   } else {
//     next();
//   }
// }
