/*-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
# Name       : auth.route.js
# Description: 
# Created By : Rucha
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------*/

//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

// console.log("You are in Auth route");

const AuthController = require('../controllers/Auth.controller');

router.route('/getLogin').get(AuthController.getLogin)

module.exports.router = router; 