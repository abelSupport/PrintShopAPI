//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const PrintSiteController = require('../controllers/PrintSiteMaster.controller');


router.route('/getprintsite')
    .get(PrintSiteController.getPrintSiteMaster)

module.exports.router = router;  