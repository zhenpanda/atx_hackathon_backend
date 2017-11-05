const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['atx_hackathon_backend server']);
  });
  app.post('/signup', Authentication.signup);
  app.post('/checkuser', Authentication.checkuser);
  app.get('/findall', Authentication.findall);
  app.get('/findallpols', Authentication.findallPoliticians)
  app.post('/createpolitician', Authentication.createPolitician);
  app.post('/donate', Authentication.donate);
}
