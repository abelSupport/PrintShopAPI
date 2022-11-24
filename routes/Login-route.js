//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const LoginController = require('../controllers/Login.controller');

    router.route('/getloginById')
    .post(LoginController.getLoginById)

    

module.exports.router = router;  