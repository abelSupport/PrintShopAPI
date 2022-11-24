//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const SizeMasterController = require('../controllers/SizeMaster.controller');


router.route('/getsize')
    .get(SizeMasterController.getSizeMaster)

module.exports.router = router;  