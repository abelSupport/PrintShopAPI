//const router = require('express-promise-router')();
var  express = require('express');var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

//const { DashboardController } = require('../controllers/basecontroller');
const CustomerMasterController = require('../controllers/CustomerMaster.controller');

    router.route('/getcustomerById')
    .post(CustomerMasterController.getCustomerById)

    router.route('/addcustomer')
    .post(CustomerMasterController.addCustomer)

module.exports.router = router;  