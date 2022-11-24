//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const PrintTypeController = require('../controllers/PrintTypeMaste.controller');


router.route('/getprinttype')
    .get(PrintTypeController.getPrintTypeMaster)

  
module.exports.router = router;  